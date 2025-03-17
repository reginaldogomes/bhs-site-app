// filepath: /home/reginaldogomes/Projects/bhs-site-app/src/modules/blog/components/PostForm.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface PostFormProps {
  initialData?: { title: string; content: string };
  onSubmit: (title: string, content: string) => Promise<void>;
}

export default function PostForm({ initialData, onSubmit }: PostFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title || !content) {
      alert("Title and content are required.");
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(title, content);
      router.push("/blog/posts");
    } catch (error) {
      console.error("Failed to submit post:", error);
      alert("An error occurred while submitting the post.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={initialData?.title}
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          defaultValue={initialData?.content}
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {isSubmitting ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
