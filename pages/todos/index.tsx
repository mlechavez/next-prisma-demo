import { Prisma, Todo } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { prisma } from "../../lib/prisma";

const TodosPage = ({
  todoList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [todos, setTodos] = useState(todoList);
  const router = useRouter();

  const refreshPage = () => {
    router.replace(router.asPath);
  };
  const handleSubmit = async (todoInput: Prisma.TodoCreateInput) => {
    try {
      const todo = await saveTodo(todoInput);
      setTodos([...todos, todo]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TodoForm onSubmit={handleSubmit} />
      {todos && todos.length > 0 && <TodoList todos={todos} />}
    </>
  );
};

async function saveTodo(todoInput: Prisma.TodoCreateInput) {
  const response = await fetch(`/api/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todoInput),
  });

  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
}

interface Props {
  todoList: Todo[];
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const todoList = await prisma.todo.findMany();
  console.log(todoList);
  return {
    props: {
      todoList,
    },
  };
};

export default TodosPage;
