import { Button, StyleSheet, Text, View } from 'react-native';

import {TodoPageProps} from './TodoPage.props';

export default function TodoPage(props: TodoPageProps) {
  const { todo, goBack  } = props;

  return (
      <View>
        <Text>{todo?.title}</Text>
        <Button title='Назад' onPress={goBack}/>
      </View>
  );
}

const styles = StyleSheet.create({});
