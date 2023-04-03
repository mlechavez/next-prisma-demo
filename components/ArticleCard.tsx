import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Post } from "@prisma/client";

interface Props {
  post: Post;
}
const ArticleCard = ({ post }: Props) => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>{post.title}</CardBody>
    </Card>
  );
};

export default ArticleCard;
