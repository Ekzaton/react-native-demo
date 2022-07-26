import { StyleSheet, Text, View } from 'react-native';

import { Theme } from '../../constants/theme';

import { NavbarProps } from './Navbar.props';

export default function Navbar(props: NavbarProps) {
  const { title } = props;

  return (
      <View style={styles.navbar}>
        <Text style={styles.text}>{title}</Text>
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
