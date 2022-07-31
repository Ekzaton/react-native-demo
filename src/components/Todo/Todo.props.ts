import { Todo } from '../../types/common';

export type TodoProps = {
  todo: Todo;
  onOpen: (id: string) => void;
  onRemove: (id: string) => void;
}
