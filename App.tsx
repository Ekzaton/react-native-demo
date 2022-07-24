import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AddTodo from './src/AddTodo/AddTodo';
import Navbar from './src/Navbar/Navbar';
import Todo from './src/Todo/Todo';
import { TodoType } from './src/types';

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: '1', title: 'test1' },
    { id: '2', title: 'test2' },
    { id: '3', title: 'test3' },
    { id: '4', title: 'test4' },
    { id: '5', title: 'test5' }
  ]);

  const addTodoHandler = (title: string) => {
    setTodos((prev) => [...prev, {
      id: Date.now().toString(),
      title: title,
    }])
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodoHandler} />
        <FlatList keyExtractor={(item) => item.id} data={todos} renderItem={({ item }) => <Todo todo={item} />}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
