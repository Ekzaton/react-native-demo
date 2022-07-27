import { StyleSheet, View } from 'react-native';

import { CardProps } from './Card.props';

export default function Card(props: CardProps) {
  const { children, style } = props;

  return <View style={ {...styles.default, ...style} }>{children}</View>
}

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 8,
  }
});
