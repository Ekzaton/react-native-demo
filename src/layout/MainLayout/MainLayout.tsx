import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from '../../components/Navbar/Navbar';
import { Theme } from '../../constants/theme';
import { PagesContext } from '../../context/pages/pagesContext';
import MainPage from '../../pages/MainPage/MainPage';
import TodoPage from '../../pages/TodoPage/TodoPage';
import { Pages } from '../../types/context';

export default function MainLayout() {
  const { todoID } = useContext<Pages>(PagesContext);

  return (
      <View style={styles.wrapper}>
        <Navbar title='Todo App' />
        <View style={styles.container}>
          {todoID ? <TodoPage /> : <MainPage />}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Theme.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
  wrapper: {
    flex: 1
  }
});
