import { StyleSheet, TouchableOpacity, View } from 'react-native';

import TextRoboto from '../ui/RobotoText/TextRoboto';

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
          <TextRoboto>{todo.title}</TextRoboto>
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
