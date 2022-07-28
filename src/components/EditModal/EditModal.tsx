import { useState } from 'react';
import { Alert, Button, Modal, StyleSheet, TextInput, View } from 'react-native';

import { Theme } from '../../constants/theme';

import { EditModalProps } from './EditModal.props';

export default function EditModal(props: EditModalProps) {
  const { value, visible, onCancel, onSave } = props

  const [title, setTitle] = useState(value);

  const closeHandler = () => {
    setTitle(value);
    onCancel();
  }

  const saveHandler = () => {
    const titleLength = title.trim().length;

    if (titleLength < 3) {
      Alert.alert(
          'Ошибка',
          `Минимальная длина названия 3 символа. Сейчас она ${titleLength} символа`
      )
    } else {
      onSave(title);
    }
  }

  return (
      <Modal visible={visible} animationType='slide'>
        <View style={styles.wrap}>
          <TextInput
              style={styles.input}
              placeholder='Введите название'
              value={title}
              onChangeText={setTitle}
              maxLength={64}
              autoCapitalize='none'
              autoCorrect={false}
          />
          <View style={styles.buttons}>
            <Button title='Отменить' color={Theme.DANGER_COLOR} onPress={closeHandler} />
            <Button title='Сохранить' onPress={saveHandler}/>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    padding: 10,
    borderBottomColor: Theme.MAIN_COLOR,
    borderBottomWidth: 2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  }
});
