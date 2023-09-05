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
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',     
      borderWidth: 2,        
      marginBottom: 15,
      width: 343,
      height: 55,
      
      paddingStart: 15,
      paddingEnd:15
    },
    text: {
      fontSize: 20,
    },
    modalContainer:{
     flex:1,
     backgroundColor:'#861578',
     justifyContent:'center',
     alignItems:'center',
          
    },
    modalText:{
      fontSize:25,
      fontWeight: '600',
      color:'white',
      textAlign:'center',
      marginBottom:55      
    },
    buttonModalContainer:{      
      flexDirection:'row',      
    },
    buttonModal:{
      margin:5
    }
  });
  