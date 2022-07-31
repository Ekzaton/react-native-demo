import { ActivityIndicator, ColorValue, StyleSheet, View } from 'react-native';

import { Theme } from '../../../constants/theme';

export default function Loader() {
  return (
      <View style={styles.center}>
        <ActivityIndicator size='large' color={Theme.MAIN_COLOR as ColorValue} />
      </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
