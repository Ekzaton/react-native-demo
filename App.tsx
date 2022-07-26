import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from './src/components/Navbar/Navbar';
import MainPage from './src/pages/MainPage/MainPage';
import TodoPage from './src/pages/TodoPage/TodoPage';
import { TodoType } from './src/types/common';

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: '1', title: 'test1' },
    { id: '2', title: 'test2' },
    { id: '3', title: 'test3' },
    { id: '4', title: 'test4' },
    { id: '5', title: 'test5' }
  ]);
  const [todoID, setTodoID] = useState<string | null>(null);

  const addTodoHandler = (title: string) => {
    setTodos((prev) => [...prev, {
      id: Date.now().toString(),
      title: title,
    }])
  }

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  let content = <MainPage todos={todos} addTodo={addTodoHandler} openTodo={setTodoID} removeTodo={removeTodoHandler} />

  if (todoID) {
    const selectedTodo = todos.find((todo) => todo.id === todoID);
    content = <TodoPage todo={selectedTodo} goBack={() => setTodoID(null)}/>
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        {content}
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
