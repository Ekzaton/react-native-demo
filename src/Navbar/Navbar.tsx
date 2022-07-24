import { StyleSheet, Text, View } from 'react-native';

import { NavbarProps } from "./Navbar.props";

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
    backgroundColor: '#3949AB',
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
});
