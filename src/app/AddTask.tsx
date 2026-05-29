import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Item from '../components/itemTarefa';
import { CircleAlert } from 'lucide-react-native';


export default function Tela2() {
  const [numTarefas, setNumTarefas] = useState(0);
  const [textoTarefa, setTextoTarefa] = useState('');
  const [lista, setLista] = useState<string[]>([]);
  const [mensagem, setMensagem] = useState('');


  const additemLista = () => {
    if (textoTarefa.trim() === '') return;

    setLista((prev) => [...prev, textoTarefa]);

    setNumTarefas(prev => prev + 1);

    setTextoTarefa('');
  };

  const removerItem = (index: number) => {
    setLista((prev) => prev.filter((_, i) => i !== index));
    setNumTarefas(prev => prev - 1);
    setMensagem('O item foi removido da lista');
  };

  return (
    <View style={styles.contentContainer}>
      <View>
        <Text style={styles.textoTopo}>
          Lista de tarefas pendentes
        </Text>

        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            value={textoTarefa}
            onChangeText={setTextoTarefa}
            placeholder="Digite uma nova tarefa aqui"
          />

          <TouchableOpacity onPress={additemLista}>
            <Text style={styles.addItem}>
              Adicionar tarefa
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.numTask}>
        <Text>Número de tarefas: {numTarefas}</Text>
      </View>
      <View style={styles.listaContainer}>
        {lista.length === 0 ? (
          <Text style={styles.listaVazia}>
            Nenhuma tarefa adicionada :(
          </Text>
        ) : (
          lista.map((item, index) => (
            <Item
              key={index}
              listaDeTarefas={item}
              onRemove={() => removerItem(index)}
            />
          ))
        )}
      </View>
      
      {mensagem !== '' && (
        <View style={styles.alertaContainer}>
          <CircleAlert color='#fff'/> 
          <Text style={styles.alertaTexto}>
            {mensagem}
          </Text>


            <TouchableOpacity onPress={() => setMensagem('')}>
              <Text style={styles.fecharMensagem}>✕</Text>
            </TouchableOpacity>
  
 
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    top: 40
  },

  inputsContainer: {
    alignItems: 'center',
    top: 10
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#929292c9',
    color: '#000',
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 15
  },

  textoTopo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 10,
    textAlign: 'center',
    bottom: 10
  },

  addItem: {
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#8CC153',
    top: 10,
    padding: 10,
    paddingHorizontal: 80,
    fontWeight: 'bold',
    color: '#fff'
  },

  numTask:{
    top: 30,
    left: 25
    
  },
  listaContainer: {
    marginTop: 40
  },

  listaVazia: {
    textAlign: 'center',
    color: '#7a7a7a',
    fontSize: 16,
    marginTop: 20
  },

  alertaContainer: {
    marginTop: 'auto',
    marginHorizontal: 15,
    marginBottom: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e04040',
    borderColor: '#fff',
  },

  alertaTexto: {
    color: '#fff',
    fontWeight: 'bold',
    

  },

  fecharMensagem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});