
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Modal, Text, TextInput, View } from 'react-native';
import { styles } from './StyleApp';
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';

export default function App() {

  const [textValue, setTextValue] = useState('')
  const [list, setList] = useState([])
  const [visibleModal, setVisibleModal] = useState(false)
  const [selectedItemDelete, setSelectedItemDelete] = useState({})

  const onHandleChange = text => setTextValue(text)

  const addItem = () => {
    setList(prevState => [{ id: Math.random(), value: textValue }, ...prevState])
    setTextValue('')
  }

  const selectedItem = (item) => {
    setVisibleModal(true)
    setSelectedItemDelete(item)   
  }

  const deleteItem = () => {   
    setList(list.filter(item => item.id != selectedItemDelete.id))
    setVisibleModal(false)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Ingrese tarea'
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChange}
        >
        </TextInput>

        <View style={styles.button}>
          <Button  color="warning" onPress={addItem} >
            <Icon name="save" color="white" width= {25} />
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
                  <Button color="error" onPress={() => selectedItem(item)}>
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
          <Text style={styles.modalText}>Esta seguro que desea eliminar </Text>
          <Text style={styles.modalText2} >{selectedItemDelete.value}</Text>
          <View style={styles.buttonModalContainer}>
            <Button 
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
                fontSize: 19,
              }}
              buttonStyle={{
                width: 165,
                margin:5,
                borderRadius: 15,                
              }}
              onPress={() => setVisibleModal(false)}
            >
              Volver
            </Button>


            <Button color="error"
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
              onPress={deleteItem}
            >
              Confirmar
            </Button>
          </View>

        </View>
      </Modal>
    </View>
  );
}

