import { TodoType } from '../../types/common';

export type TodoPageProps = {
  todo: TodoType | undefined;
  goBack: () => void;
}
