import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

  return (
    <View style = {styles.header}>
        <Text style = {styles.title}>Unit Converter</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor : 'coral',
    height : 80,
    justifyContent : 'center',
    alignItems : 'center',
  },
  title : {
    fontSize : 30,
    fontWeight : 'bold',
    color : '#fff',
  }
});
