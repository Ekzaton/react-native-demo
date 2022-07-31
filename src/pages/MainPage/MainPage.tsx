import { useCallback, useContext, useEffect } from 'react';
import { ColorValue, FlatList, Image, StyleSheet, View } from 'react-native';

import AddTodo from '../../components/AddTodo/AddTodo';
import Todo from '../../components/Todo/Todo';
import Button from '../../components/ui/Button/Button';
import Loader from "../../components/ui/Loader/Loader";
import TextRoboto from '../../components/ui/RobotoText/TextRoboto';
import { Theme } from '../../constants/theme';
import { PagesContext } from '../../context/pages/pagesContext';
import { TodosContext } from '../../context/todos/todosContext';
import { Pages, Todos } from '../../types/context';

export default function MainPage() {
  const { changePage } = useContext<Pages>(PagesContext);
  const { todos, loading, error, addTodo, fetchTodos, removeTodo } = useContext<Todos>(TodosContext);

  const loadTodos = useCallback(async () => fetchTodos(), [fetchTodos])

  useEffect(() => {
    loadTodos();
  }, [])

  let content = <FlatList
        contentContainerStyle={styles.listWrap}
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onOpen={changePage} onRemove={removeTodo} />}
    />

  if (!todos.length) {
    content = <View style={styles.imageWarp}>
      <Image style={styles.image} source={require('../../../assets/no-items.png')} />
    </View>
  }

  if (loading) return <Loader />

  if (error) {
    return (
        <View style={styles.center}>
            <TextRoboto style={styles.error}>
              {error}
            </TextRoboto>
          <View style={styles.button}>
            <Button onPress={loadTodos}>Повторить</Button>
          </View>
        </View>
    );
  }

  return (
      <View>
        <AddTodo onSubmit={addTodo} />
        {content}
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 20,
    color: Theme.DANGER_COLOR as ColorValue
  },
  imageWarp: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  listWrap: {
    width: '100%',
  }
});
