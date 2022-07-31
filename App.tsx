import { loadAsync } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

import PagesState from './src/context/pages/PagesState/PagesState';
import TodosState from './src/context/todos/TodosState/TodosState';
import MainLayout from './src/layout/MainLayout/MainLayout';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await preventAutoHideAsync();
        await loadAsync({
          'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await hideAsync();
  }, [appIsReady])

  if (!appIsReady) return null

  return (
      <PagesState>
        <TodosState>
          <MainLayout onLayout={onLayoutRootView} />
        </TodosState>
      </PagesState>
  );
}
