export type EditModalProps = {
  value: string;
  visible: boolean;
  onCancel: () => void;
  onSave: (title: string) => void;
}
