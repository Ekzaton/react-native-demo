import {useContext, useState} from 'react';
import { ColorValue, Dimensions, StyleSheet, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import EditModal from '../../components/EditModal/EditModal';
import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';
import TextRobotoBold from '../../components/ui/RobotoTextBold/TextRobotoBold';
import { Theme } from '../../constants/theme';
import { PagesContext } from '../../context/pages/pagesContext';
import { TodosContext } from '../../context/todos/todosContext';
import { Pages, Todos } from '../../types/context';

export default function TodoPage() {
  const { todoID, changePage } = useContext<Pages>(PagesContext);
  const { todos, removeTodo, updateTodo } = useContext<Todos>(TodosContext);

  const [modal, setModal] = useState(false);

  const todo = todos.find((todo) => todo.id === todoID);

  const saveHandler = async (title: string) => {
    await updateTodo(todo!.id, title);
    setModal(false);
  }

  return (
      <View>
        <EditModal
            value={todo!.title}
            visible={modal}
            onCancel={() => setModal(false)}
            onSave={saveHandler}
        />

        <Card style={styles.card}>
          <TextRobotoBold style={styles.title}>{todo!.title}</TextRobotoBold>
          <Button onPress={() => setModal(true)}>
            <FontAwesome name='edit' size={20} />
          </Button>
        </Card>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button onPress={() => changePage(null)} color={Theme.GREY_COLOR as ColorValue}>
              <AntDesign name='back' size={20} />
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={() => removeTodo(todo!.id)} color={Theme.DANGER_COLOR as ColorValue}>
              <FontAwesome name='remove' size={20} />
            </Button>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: Dimensions.get('window').width > 800 ? 300 : 150
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  title: {
    fontSize: 20
  }
});
