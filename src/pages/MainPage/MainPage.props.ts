import { TodoType } from '../../types/common';

export type MainPageProps = {
  todos: TodoType[];
  addTodo: (title: string) => void;
  openTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}
