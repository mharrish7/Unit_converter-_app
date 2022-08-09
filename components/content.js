import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Content({val,setu,text}) {

  let itemst = [[
    { label: 'Kelvin', value: 'K' },
    { label: 'Celcius', value: 'C' },
    { label: 'Fahrenheit', value: 'F' },
  ],
  [
    { label: 'm', value: 'm' },
    { label: 'mm', value: 'mm' },
    { label: 'km', value: 'km' },
  ],
  [
    { label: 'mg', value: 'mg' },
    { label: 'g', value: 'g' },
    { label: 'kg', value: 'kg' },
  ],
  [
    { label: 'm/s', value: 'm/s' },
    { label: 'km/hr', value: 'km/hr' },
    { label: 'mph', value: 'mph' },
  ],
]
  
  return (
    <View style = {styles.header}>
        <Text style = {styles.title}>{text}</Text>
        <RNPickerSelect
            onValueChange={(value) => {setu({val : value})}}
            items={itemst[val]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width : 'auto',
    margin : 10,
  },
  title : {
  }
});
