import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Item from '../components/itemTarefa'
import { useFonts } from '@expo-google-fonts/inter/useFonts';

export default function Tela2() {
  const [textoTarefa, setTextoTarefa] = useState('');
  const [lista, setLista] = useState<string[]>([]);
  const additemLista = () =>{
    if(textoTarefa.trim() === '') return;

    setLista((prev) => [...prev, textoTarefa]);
    setTextoTarefa('')
  }


  return (
    <View>
      <View>
        <View>
          <Text style={styles.textoTopo}>Adicionar nova tarefa</Text>
          <TextInput 
          style={styles.input}
          value={textoTarefa}
          onChangeText={setTextoTarefa}
          placeholder='     Digite uma nova tarefa aqui'
          />
          <TouchableOpacity onPress={additemLista}>
            <Text style={styles.addItem}>Adicionar tarefa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {lista.map((item, index) =>(
          <Item key={index} listaDeTarefas={item}/> 
          ))}

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  input:{
    backgroundColor: "#ffffff",
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#929292c9',
    marginHorizontal:10,
    fontFamily: 'System',
    color: '#a3a3a3'
  },

  textoTopo:{
    fontSize:25,
    fontWeight: 'bold',
    color: "#000000",
    marginHorizontal: 10
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',

  },

  addItem:{
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#8CC153',
    top: 10,
    padding: 10,
    paddingLeft: 15,
    left: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',   
    marginRight: 230,
    fontWeight: 'bold',
    color: '#fff',
   
  }



})