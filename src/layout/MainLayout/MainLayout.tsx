import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from '../../components/Navbar/Navbar';
import { Theme } from '../../constants/theme';
import { PagesContext } from '../../context/pages/pagesContext';
import MainPage from '../../pages/MainPage/MainPage';
import TodoPage from '../../pages/TodoPage/TodoPage';
import { Pages } from '../../types/context';

import { MainLayoutProps } from './MainLayout.props';

export default function MainLayout(props: MainLayoutProps) {
  const { onLayout } = props;

  const { todoID } = useContext<Pages>(PagesContext);

  return (
      <View style={styles.wrapper} onLayout={onLayout}>
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
