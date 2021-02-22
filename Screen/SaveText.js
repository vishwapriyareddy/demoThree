import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const SaveText = () =>{
    
   const data= ' Write anything here ';
    return (
<View style={styles.inputContainer}>
<TextInput 
style = {styles.input}
default={data}
multiline={true}
editable={true}
maxLength={200}
/>
   </View>
    );
};
export default SaveText;

const styles = StyleSheet.create({
    inputContainer:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems:'center'
    },
    input:{
      width: '80%', 
      height: '25%',
      borderBottomColor:'black',
      borderBottomWidth: 1, 
      padding: 10
    }
});