import NextLink from "next/link";
import { Link, List, ListItem } from "@chakra-ui/react";
import { Todo } from "@prisma/client";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
}
const TodoList = ({ todos }: Props) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} mb="5px">
          <TodoCard todo={todo} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
