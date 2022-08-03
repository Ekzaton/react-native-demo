import { loadAsync } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useAssetsLoading() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await preventAutoHideAsync();
        await loadAsync({
          'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
          'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf')
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
        await hideAsync();
      }
    }

    prepare();
  }, []);

  return isLoadingComplete;
}
