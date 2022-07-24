import { StyleSheet, TextInput, Button, View } from 'react-native';

import { AddTodoProps } from "./AddTodo.props";

export default function AddTodo(props: AddTodoProps) {
  const { onSubmit } =  props;

  const pressHandler = () => {
    onSubmit('test Todo');
  }

  return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <Button title='Добавить' onPress={pressHandler}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949AB',
  }
});
