import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import EditModal from '../../components/EditModal/EditModal';
import Card from '../../components/ui/Card/Card';
import TextRobotoBold from '../../components/ui/RobotoTextBold/TextRobotoBold';
import { Theme } from '../../constants/theme';

import { TodoPageProps } from './TodoPage.props';

export default function TodoPage(props: TodoPageProps) {
  const { todo, goBack, onRemove, onSave  } = props;

  const [modal, setModal] = useState(false);

  const saveHandler = (title: string) => {
    onSave(todo!.id, title);
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
          <Button title='Редактировать' onPress={() => setModal(true)} />
        </Card>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Назад' color={Theme.GREY_COLOR} onPress={goBack} />
          </View>
          <View style={styles.button}>
            <Button title='Удалить' color={Theme.DANGER_COLOR} onPress={() => onRemove(todo!.id)} />
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
    width: '40%'
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  title: {
    fontSize: 20
  }
});
