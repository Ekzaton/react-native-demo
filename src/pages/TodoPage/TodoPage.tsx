import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import EditModal from '../../components/EditModal/EditModal';
import Button from '../../components/ui/Button/Button';
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
          <Button onPress={() => setModal(true)}>
            <FontAwesome name='edit' size={20} />
          </Button>
        </Card>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button color={Theme.GREY_COLOR} onPress={goBack}>
              <AntDesign name='back' size={20} />
            </Button>
          </View>
          <View style={styles.button}>
            <Button color={Theme.DANGER_COLOR} onPress={() => onRemove(todo!.id)}>
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
