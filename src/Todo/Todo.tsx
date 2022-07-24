import { StyleSheet, Text, View } from 'react-native';

import { TodoProps } from './Todo.props';

export default function Todo(props: TodoProps) {
  const { todo } = props;

  return (
      <View style={styles.container}>
        <Text>{todo.title}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  }
});
