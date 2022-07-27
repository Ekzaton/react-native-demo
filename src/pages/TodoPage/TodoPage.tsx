import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../../components/ui/Card/Card';
import { Theme } from '../../constants/theme';

import { TodoPageProps } from './TodoPage.props';

export default function TodoPage(props: TodoPageProps) {
  const { todo, goBack  } = props;

  return (
      <View>
        <Card style={styles.card}>
          <Text style={styles.title}>{todo?.title}</Text>
          <Button title='Редактировать' />
        </Card>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Назад' color={Theme.GREY_COLOR} onPress={goBack} />
          </View>
          <View style={styles.button}>
            <Button title='Удалить' color={Theme.DANGER_COLOR} onPress={() => console.log('To Remove')} />
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
