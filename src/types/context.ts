import { Todo } from './common';

export type Todos = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  addTodo: (title: string) => void;
  fetchTodos: () => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
}

export type Pages = {
  todoID: string | null;
  changePage: (id: string | null) => void;
}
