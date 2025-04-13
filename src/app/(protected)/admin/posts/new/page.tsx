// app/(blog)/posts/new/page.tsx
import PostForm from "@blog/components/PostForm";
import { createPost } from "@blog/actions/postActions";

export default function NewPostPage() {
  return (
    <div>
      <h1>New Post</h1>
      <PostForm
        onSubmit={(title, content) =>
          createPost({ title, content }).then(() => {})
        }
      />
    </div>
  );
}
