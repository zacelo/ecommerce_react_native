import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 50
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: '#861578',
      margin: 7,
      marginTop: 30,
      marginBottom: 20
  
    },
    input: {
      width: 290,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      width: 50,
      height: 42,
      
    },
    listContainer: {
      alignItems: 'center',
      borderWidth: 3,
      borderColor: '#861578',
      margin: 7,
      paddingTop: 15,
      minHeight: 600     
    },
    textContainer: {
      borderWidth: 2,
      borderColor: '#861578',      
      marginBottom: 15,
      width: 343,
      height: 45,
      justifyContent: 'center',
      paddingStart: 15
    },
    text: {
      fontSize: 20,
    },
    modalContainer:{
     
     backgroundColor:'red',
     width:350,
     height:500,
     justifyContent: 'center',
     alignItems:'center'
    }
  });
  