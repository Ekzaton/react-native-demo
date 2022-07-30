import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Theme } from '../../../constants/theme';

import TextRobotoBold from '../RobotoTextBold/TextRobotoBold';

import { ButtonProps } from './Button.props';

export default function Button(props: ButtonProps) {
  const { children, onPress, color = Theme.MAIN_COLOR } = props;

  return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={ {...styles.button, backgroundColor: color } }>
          <TextRobotoBold style={styles.text}>{children}</TextRobotoBold>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
  }
});
