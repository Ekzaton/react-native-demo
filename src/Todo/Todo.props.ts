import { TodoType } from "../types";

export type TodoProps = {
  todo: TodoType;
  onRemove: (id: string) => void;
}
