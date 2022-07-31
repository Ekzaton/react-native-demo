import { Todo } from '../../types/common';

export type MainPageProps = {
  todos: Todo[];
  addTodo: (title: string) => void;
  openTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}
