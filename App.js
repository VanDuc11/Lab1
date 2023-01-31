import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, TextInput, View } from 'react-native';
import ProductList from './src/screens/ProductList';
import { useState } from 'react';

export default function App() {
  const [statuState,setStatuState] = useState(false);


  let list = [
    {id: 1, name: 'Nguyễn văn a', mssv: 'ph19780'},
    {id: 2, name: 'Nguyễn văn b', mssv: 'ph1234'},
    {id: 3, name: 'Nguyễn văn c', mssv: 'ph1235'},
    {id: 4, name: 'Nguyễn văn d', mssv: 'ph1236'},
    
  ];
  return (
    <View style={styles.container}>

      <Text style={styles.text} >Duong văn đức</Text>
      <Text style={styles.text}>PH19780</Text>
      <Button 
      title={`${statuState ? 'ẩn': 'hiện'}`}
      onPress={() => setStatuState(!statuState)}
      />
      {
        statuState
        ? <>
          <TextInput placeholder='Name:' style={styles.boder}/>
          <TextInput placeholder='Mssv:' style={styles.boder}/>
          <Button title='Lưu'/>
          <Button title='Hủy'/>
          
        </>
        :null
      }
      
      <ProductList data={list}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  text:{
    color:'black',
    fontSize:20
  },
  boder:{
    width: 200,
    height:54,
    borderWidth:1,
    padding:10,
    margin:10
  }
});
