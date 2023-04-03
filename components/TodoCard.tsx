import { Button, Card, CardBody, HStack, Spacer, Text } from "@chakra-ui/react";
import { Todo } from "@prisma/client";

interface Props {
  todo: Todo;
}
const TodoCard = ({ todo }: Props) => {
  return (
    <Card>
      <CardBody>
        <HStack>
          <Text>{todo.name}</Text>
          <Spacer />
          <Button>Delete</Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default TodoCard;
