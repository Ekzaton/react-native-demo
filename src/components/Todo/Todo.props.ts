import { TodoType } from '../../types/common';

export type TodoProps = {
  todo: TodoType;
  onOpen: (id: string) => void;
  onRemove: (id: string) => void;
}
