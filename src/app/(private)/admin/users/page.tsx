/*import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";*/

export default async function UsersPage() {
    /*const session = await getServerSession(authOptions);
  
    if (!session || session.user.role !== "admin") {
      return <p>Você não tem permissão para acessar esta página.</p>;
    }*/
  
    return (
      <div>
        <h1 className="text-2xl font-bold">Lista de Usuários</h1>
      </div>
    );
  }
  