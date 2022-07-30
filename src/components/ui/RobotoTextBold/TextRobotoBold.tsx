import { StyleSheet, Text } from 'react-native';

import { TextRobotoBoldProps } from './TextRobotoBold.props';

export default function TextRobotoBold(props: TextRobotoBoldProps) {
  const { children, style } = props;

  return <Text style={ {...styles.default, ...style} }>{children}</Text>
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-bold',
  }
});
