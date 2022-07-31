import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export default function useWidth(offset: number) {
  const [width, setWidth] = useState(Dimensions.get('window').width - offset);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
        'change',
        () => setWidth(Dimensions.get('window').width - offset)
    );

    return () => subscription.remove();
  }, [])

  return width;
}
