import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import AddTodo from './src/AddTodo/AddTodo';
import Navbar from './src/Navbar/Navbar';
import Todo from './src/Todo/Todo';
import { TodoType } from "./src/types";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

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
        <ScrollView>
          {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </ScrollView>
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
