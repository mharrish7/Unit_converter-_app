import { StyleSheet, Keyboard, View,TextInput,Button} from 'react-native';
import { useState } from 'react';

export default function Form({item, add}) {

  const [text, settext] = useState('');

  function change(val){
    settext(val);
  }

  function setu(text){
    Keyboard.dismiss();
    add(text);
  }

  return (
    <View>
        <TextInput 
            placeholder='Enter the value'
            onChangeText={change}
            keyboardType="numeric"
        />
        <Button title='CONVERT' onPress={() => {setu(text)}} color = 'coral' />
    </View>
        
  )
}

const styles = StyleSheet.create({
    title : {
        borderColor : '#bbb',
        borderWidth : 2,
        padding : 16,
        marginTop : 16,
    }
});
