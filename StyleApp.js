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
      margin: 6,
      marginTop: 30,
      marginBottom: 20
  
    },
    input: {
      width: 290,
      height: 42,
      margin: 12,
      borderWidth: 1,
      padding: 10,
     fontSize:19
    },
    button: {
      width: 55,
      height: 43,
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
     marginTop:160,
     backgroundColor:'#861578',
     justifyContent:'center',
     alignItems:'center',
     
     height:400    
    },
    modalText:{
      fontSize:25,
      fontWeight: '600',
      color:'#DDC5C0',
      textAlign:'center',
      marginBottom:2     
    },
    modalText2:{
      fontSize:30,
      fontWeight: '600',
      color:'white',
            
      borderColor: 'black',
      textAlign:'center',
      marginTop:25,
           
    },
    buttonModalContainer:{
      marginTop: 65,      
      flexDirection:'row',      
    },
    buttonModal:{
      margin:5
    }
  });
  