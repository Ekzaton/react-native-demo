import { FlatList, StyleSheet, View } from 'react-native';

import AddTodo from '../../components/AddTodo/AddTodo';
import Todo from '../../components/Todo/Todo';

import { MainPageProps } from './MainPage.props';

export default function MainPage(props: MainPageProps) {
  const { addTodo, openTodo, removeTodo, todos } = props;

  return (
      <View>
        <AddTodo onSubmit={addTodo} />
        <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item }) => <Todo todo={item} onOpen={openTodo} onRemove={removeTodo} />}
        />
      </View>
  );
}

const styles = StyleSheet.create({});
