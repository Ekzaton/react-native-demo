import { useContext } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

import AddTodo from '../../components/AddTodo/AddTodo';
import Todo from '../../components/Todo/Todo';
import { PagesContext } from '../../context/pages/pagesContext';
import { TodosContext } from '../../context/todos/todosContext';
import { Pages, Todos } from '../../types/context';

export default function MainPage() {
  const { changePage } = useContext<Pages>(PagesContext);
  const { todos, addTodo, removeTodo } = useContext<Todos>(TodosContext);

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

  return (
      <View>
        <AddTodo onSubmit={addTodo} />
        {content}
      </View>
  );
}

const styles = StyleSheet.create({
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
