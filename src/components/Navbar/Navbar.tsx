import {Platform, StyleSheet, View} from 'react-native';

import { Theme } from '../../constants/theme';

import TextRobotoBold from '../ui/RobotoTextBold/TextRobotoBold';

import { NavbarProps } from './Navbar.props';

export default function Navbar(props: NavbarProps) {
  const { title } = props;

  return (
      <View style={ {...styles.navbar, ...Platform.select({
          android: {
            backgroundColor: Theme.MAIN_COLOR,
          },
          ios: {
            borderBottomColor: Theme.MAIN_COLOR,
            borderBottomWidth: 1,
          }
        })}}>
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
  },
  text: {
    fontSize:  20,
    color: Platform.OS === 'ios' ? Theme.MAIN_COLOR : '#fff',
  }
});
