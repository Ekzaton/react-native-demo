import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddTodo from './src/AddTodo/AddTodo';
import Navbar from './src/Navbar/Navbar';
import { Todo } from "./src/types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

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
        <View>
          {todos.map((todo) => <Text key={todo.id}>{todo.title}</Text>)}
        </View>
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
