import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Post } from '../types/post';

interface PostListProps {
  posts?: Post[]; // posts é opcional
}

export const PostList: React.FC<PostListProps> = ({ posts = [] }) => { // Valor padrão: []
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};