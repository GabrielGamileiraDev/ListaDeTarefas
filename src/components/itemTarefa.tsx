import { Text, View, StyleSheet } from 'react-native';
import Tags from './tags';
import { Circle } from 'lucide-react-native';

type listaDeItens = {
  listaDeTarefas: string;
  onRemove: () => void;
};

export default function Item({
  listaDeTarefas,
  onRemove
}: listaDeItens) {
  return (
    <View style={styles.container}>
      <Circle size={16} color="#acacac" />

      <Text style={styles.title}>
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
  }
});