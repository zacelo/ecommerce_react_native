
import { useState } from 'react';
import { FlatList, Modal, Text, TextInput, View } from 'react-native';
import { styles } from './StyleApp';
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';

export default function App() {

  const [textValue, setTextValue] = useState('')
  const [list, setList] = useState([])
  const [visibleModal, setVisibleModal] = useState(false)
  const [deleteModalItem, setDeleteModalItem] = useState({})

  const onHandleChange = text => setTextValue(text)

  const addItem = () => {
    setList(prevState => [{ id: Math.random(), value: textValue }, ...prevState])
    setTextValue('')
  }

  const deleteModal = (item) => {
    setVisibleModal(true)
    setDeleteModalItem(item)
   
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Ingrese tarea'
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChange}
        >
        </TextInput>

        <View style={styles.button}>
          <Button title='+' color="warning" onPress={addItem} >
            <Icon name="save" color="white" />
          </Button>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <>
              <View style={styles.textContainer} >
                <Text style={styles.text}>{item.value}</Text>
                <View>
                  <Button color="error" onPress={() => deleteModal(item)}>
                    <Icon name="delete" color="white" />
                  </Button>
                </View>
              </View >
            </>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        animationType="slide"
        visible={visibleModal}      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Esta seguro que desea eliminar {deleteModalItem.value}</Text>
          <View style={styles.buttonModalContainer}>
            <Button color="warning"
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
                fontSize: 19,
              }}
              buttonStyle={{
                width: 165,
                margin:5,
                borderRadius: 15
              }}
              onPress={() => setVisibleModal(false)}
            >
              Volver
            </Button>


            <Button color="warning"
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
                fontSize: 19,
              }}
              buttonStyle={{
                width: 165,
                borderRadius: 15,
                margin:5,
              }}
              onPress={() => setVisibleModal(false)}
            >
              Confirmar
            </Button>
          </View>

        </View>
      </Modal>
    </View>
  );
}

