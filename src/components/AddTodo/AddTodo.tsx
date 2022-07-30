import { useState } from 'react';
import { Alert, Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Theme } from '../../constants/theme';

import { AddTodoProps } from './AddTodo.props';

export default function AddTodo(props: AddTodoProps) {
  const { onSubmit } =  props;

  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Название не может быть пустым!')
    }
  }

  return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder='Введите название...'
            value={value}
            onChangeText={setValue}
            autoCapitalize='none'
            autoCorrect={false}
        />
        <AntDesign.Button name='pluscircleo' onPress={pressHandler}>Добавить</AntDesign.Button>
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
    marginBottom: 15,
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: Theme.MAIN_COLOR,
  }
});
