import { StyleSheet, Text } from 'react-native';

import { TextRobotoProps } from './TextRoboto.props';

export default function TextRoboto(props: TextRobotoProps) {
  const { children, style } = props;

  return <Text style={ {...styles.default, ...style} }>{children}</Text>
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  }
});
