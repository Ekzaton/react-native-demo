import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onPress?: () => void;
  color?: string;
}
