
import { useState } from 'react';
import { FlatList, Modal, Text, TextInput, View } from 'react-native';
import { styles } from './StyleApp';
import { Button } from '@rneui/themed';

export default function App() {

  const [textValue, setTextValue] = useState('')
  const [list, setList] = useState([])

  const onHandleChange = text => setTextValue(text)

  const addItem = () => {
    setList(prevState => [{ id: Math.random(), value: textValue }, ...prevState])
    setTextValue('')
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
          <Button title='+' color="warning"  onPress={addItem} />
          
        </View>
      </View>
     
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View style={styles.textContainer} >
              <Text style={styles.text}>{item.value}</Text>
            </View >
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal         
        animationType="slide"
        visible={false}      
      >
        <View  >
          
          <Text>Modal</Text>
        </View>
      </Modal>
    </View>
  );
}

