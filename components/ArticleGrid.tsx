import { List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Post } from "@prisma/client";

interface Props {
  posts: Post[];
}
const ArticleGrid = ({ posts }: Props) => {
  return (
    <>
      <SimpleGrid></SimpleGrid>
      <List>
        {posts &&
          posts.map((post, index) => (
            <ListItem key={index}>
              <Text>{post.title}</Text>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default ArticleGrid;
