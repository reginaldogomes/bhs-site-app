import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PostFormProps {
  onSubmit: (data: { title: string; content: string }) => void;
}

export const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<{
    title: string;
    content: string;
  }>();

  const handleFormSubmit = (data: { title: string; content: string }) => {
    onSubmit(data);
    reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <Input id="title" {...register("title")} />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Content
            </label>
            <Textarea id="content" {...register("content")} />
          </div>
          <Button type="submit">Create Post</Button>
        </form>
      </CardContent>
    </Card>
  );
};
