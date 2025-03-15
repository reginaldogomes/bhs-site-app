// hooks/usePrismaQuery.ts
import { useState, useEffect, useCallback } from "react";
import prisma from "@/lib/prisma";

type PrismaModel = keyof typeof prisma;

type QueryOptions = {
  where?: Record<string, any>;
  include?: Record<string, any>;
  orderBy?: Record<string, any>;
  take?: number;
  skip?: number;
};

type UsePrismaQueryResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
};

function usePrismaQuery<T>(
  model: PrismaModel,
  method: string,
  options?: QueryOptions,
): UsePrismaQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // @ts-ignore - Acessa dinamicamente o modelo e o método do Prisma
      const result = await prisma[model][method](options);
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [model, method, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export default usePrismaQuery;
