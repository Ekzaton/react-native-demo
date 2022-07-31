import { FlatList, Image, StyleSheet, View } from 'react-native';

import AddTodo from '../../components/AddTodo/AddTodo';
import Todo from '../../components/Todo/Todo';

import { MainPageProps } from './MainPage.props';

export default function MainPage(props: MainPageProps) {
  const { addTodo, openTodo, removeTodo, todos } = props;

  let content = <FlatList
        contentContainerStyle={styles.listWrap}
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onOpen={openTodo} onRemove={removeTodo} />}
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
