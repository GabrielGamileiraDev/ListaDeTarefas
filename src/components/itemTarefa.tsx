import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Tags from './tags';
import { Circle } from 'lucide-react-native';
import { useState } from 'react';
type listaDeItens = {
  listaDeTarefas: string;
  onRemove: () => void;
};

export default function Item({
  listaDeTarefas,
  onRemove
}: listaDeItens) 
{
  const [check, setCheck] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => 
        setCheck((!check))
      } style={styles.checkbox}>

      
      <Circle size={16} color="#acacac">{check && <View style={styles.checked} />} </Circle>
      </TouchableOpacity>

      <Text style={[styles.title, check && styles.textChecked]} >
        {listaDeTarefas}
      </Text>

      <Tags onRemove={onRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#a4a4a4',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 22,
    fontWeight: 'semibold',
    right: 110,
    color: '#747272'
  },

  textChecked: {
    textDecorationLine: 'line-through',
    opacity: 0.5
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  checked: {
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: '#5351c7'
  },
})