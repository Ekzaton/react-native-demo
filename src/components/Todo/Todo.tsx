import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { TodoProps } from './Todo.props';

export default function Todo(props: TodoProps) {
  const { todo, onOpen, onRemove } = props;

  return (
      <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => onOpen(todo.id)}
          onLongPress={() => onRemove(todo.id)}
      >
        <View style={styles.container}>
          <Text>{todo.title}</Text>
        </View>
      </TouchableOpacity>
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
