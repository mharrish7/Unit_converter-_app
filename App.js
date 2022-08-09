import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Keyboard,ToastAndroid } from 'react-native';
import Header from './components/header'
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
import Content from './components/content'
import Form from './components/form'



export default function App() {


  let hast1 = {'m-mm' : 1000, 'mm-m' : 0.001, 'm-km' : 0.001, 'km-m' : 1000, 'mm-km' : 0.000001 , 'km-mm' : 1000000}
  let hast2 = {'g-mg' : 1000, 'mg-g' : 0.001, 'g-kg' : 0.001, 'kg-g' : 1000, 'mg-kg' : 0.000001 , 'kg-mg' : 1000000}
  let hast3 = {'m/s-km/hr' : 3.6, 'km/hr-m/s' : 0.278 , 'km/hr-mph' : 0.62, 'mph-km/hr' : 1.6, 'm/s-mph' : 2.237 ,'mph-m/s' : 0.44}

  const [prop,setprop] = useState({val : '0'})

  const [fromu,setfromu] = useState({val : ''})
  const [tou,settou] = useState({val : ''})

  const [val,setval] = useState({val : 0})

  const [ans,setans] = useState(-1)

  function convert(val){
    setval(val);
    let v = fromu.val + '-' + tou.val;
    let flag = 0;
    if (hast1[v]){
      setans(hast1[v] * val);
    }
    else if (hast2[v]){
      setans(hast2[v] * val);
    }
    else if (hast3[v]){
      setans(hast3[v] * val);
    }
    else if (v == 'K-C'){
      setans(val - 273);
    }
    else if (v == 'C-K'){
      setans(val + 273);
    }
    else if (v == 'K-F'){
      setans(((val-273)*9)/5 + 32);
    }
    else if (v == 'F-K'){
      setans(((val-32)*5)/9 + 273);
    }
    else if (v =='C-F'){
      setans((val*9)/5 + 32);
    }
    else if (v == 'F-C'){
      setans(((val-32)*5)/9);
    }
    else{
      setans('invalid choice');
      flag = 1
    }
    if (flag == 1){
      ToastAndroid.show('Invlid choice of unit conversion' , ToastAndroid.SHORT);
    }
    else{
      ToastAndroid.show('Conversion successful' , ToastAndroid.SHORT);
    }
  }
  
  let arr = ['Temperature','length','weight','speed']
  return (
    <View style={styles.container}>
      <Header />
      <View>
      <View style={styles.main}>
      <Text style = {styles.maint}>Domain :</Text>
      <RNPickerSelect 
            onValueChange={(value) => setprop({val : value})}
            items={[
                { label: 'Temperature', value: '0' },
                { label: 'length', value: '1' },
                { label: 'weight', value: '2' },
                { label: 'speed', value: '3' },
            ]}
            
        />
      </View>
      
        <View style = {styles.titlev}>
          <Text style = {styles.title}>{arr[prop.val]}</Text>
        </View>
        <View style = {styles.content}>
        <Content  val = {prop.val} setu = {setfromu} text = 'From'/>
          <Content  val = {prop.val} setu = {settou} text = 'To' />
          <Form add = {convert}/>
        </View>
        <Text style = {styles.ans}>Converted to : {ans}</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 40,
  },
  title : {
    fontSize : 20,
  },
  titlev : {
    alignItems : 'center',
  },
  content : {
    padding : 10,
    lineHeight : 2,
  },
  ans : {
    fontSize : 20,
    margin : 10,
  },
  main : {
    margin : 10,
  },
  maint : {
    fontSize : 15,

  }
});
