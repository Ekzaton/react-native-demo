import { ReactNode } from 'react';
import { ColorValue } from 'react-native';

export type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  color?: ColorValue;
}
