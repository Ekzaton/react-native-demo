import { Todo } from '../../types/common';

export type TodoPageProps = {
  todo?: Todo;
  goBack: () => void;
  onRemove: (id: string) => void;
  onSave: (id: string, title: string) => void;
}
