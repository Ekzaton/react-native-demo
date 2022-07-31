import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from '../../components/Navbar/Navbar';
import { Theme } from '../../constants/theme';
import { TodosContext } from '../../context/todos/todosContext';
import MainPage from '../../pages/MainPage/MainPage';
import TodoPage from '../../pages/TodoPage/TodoPage';
import { Todos } from '../../types/context';

import { MainLayoutProps } from './MainLayout.props';

export default function MainLayout(props: MainLayoutProps) {
  const { onLayout } = props;

  const {todos, addTodo, removeTodo, updateTodo} = useContext<Todos>(TodosContext);

  const [todoID, setTodoID] = useState<string | null>(null);

  let content = <MainPage
      todos={todos}
      addTodo={addTodo}
      openTodo={setTodoID}
      removeTodo={removeTodo}
  />

  if (todoID) {
    const selectedTodo = todos.find((todo) => todo.id === todoID);
    content = <TodoPage
        todo={selectedTodo}
        goBack={() => setTodoID(null)}
        onRemove={removeTodo}
        onSave={updateTodo}
    />
  }

  return (
      <View onLayout={onLayout}>
        <Navbar title='Todo App' />
        <View style={styles.container}>{content}</View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.PADDING_HORIZONTAL,
    paddingVertical: 20,
  }
});
