import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Item({item, press}) {

  return (
    <TouchableOpacity style = {styles.title} onPress = {() => {press(item.key)}}>
        <Text>{item.text}</Text>
    </TouchableOpacity>
        
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
