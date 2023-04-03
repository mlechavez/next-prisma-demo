import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Prisma, Todo } from "@prisma/client";
import { FormEvent, useState } from "react";

interface Props {
  onSubmit: (todo: Prisma.TodoCreateInput) => void;
}
const TodoForm = ({ onSubmit }: Props) => {
  const [todo, setTodo] = useState<Prisma.TodoCreateInput>({ name: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(todo);
    setTodo({ name: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="md" mb={5}>
        <Input
          placeholder="Todo"
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <InputRightElement width="4.5rem">
          <Button>Submit</Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default TodoForm;
