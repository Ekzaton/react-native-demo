import { StyleSheet, View } from 'react-native';

import { Theme } from '../../constants/theme';

import TextRobotoBold from '../ui/RobotoTextBold/TextRobotoBold';

import { NavbarProps } from './Navbar.props';

export default function Navbar(props: NavbarProps) {
  const { title } = props;

  return (
      <View style={styles.navbar}>
        <TextRobotoBold style={styles.text}>{title}</TextRobotoBold>
      </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 70,
    paddingBottom: 10,
    backgroundColor: Theme.MAIN_COLOR,
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
});
