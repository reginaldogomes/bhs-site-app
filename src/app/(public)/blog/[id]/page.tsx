import Main from "@/components/Main";
import PostDetail from "@/modules/blog/components/PostDetails";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Verifica se o ID foi fornecido
  if (!params?.id) {
    return <p>ID inválido</p>;
  }

  return (
    <Main>
      <PostDetail id={Number(params.id)} />
    </Main>
  );
}
