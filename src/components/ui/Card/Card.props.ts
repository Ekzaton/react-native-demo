import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

export type CardProps = {
  children: ReactNode;
  style: StyleSheet.NamedStyles<unknown>;
}
