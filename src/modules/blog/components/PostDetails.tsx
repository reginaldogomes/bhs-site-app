import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Post } from '../types/post';

interface PostDetailsProps {
  post: Post;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
    </Card>
  );
};