import BaseInputDate from '@/components/baseInputDataHora';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Tags from '../components/tags';

export default function NovaTarefa() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <View>
      <View style={styles.form}>
        <View>
          <Text style={styles.titulos}>Titulo:</Text>
          <TextInput style={styles.iputs} />
        </View>
        <View>
          <Text style={styles.titulos}>Descrição:</Text>
          <TextInput style={styles.iputs} />
        </View>
        <View>
          <Text style={styles.titulos}>Tempo Limite:</Text>
          <BaseInputDate>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={() => { }}
            onCancel={() => { }}
          />
          </BaseInputDate>
        </View>
        
      </View>
      <View style={styles.viewCriar}>
        <TouchableOpacity>
          <Text>Criar tarefa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    paddingTop: 6,
    paddingHorizontal: 12
  },
  viewCriar: {

  },
  titulos: {
    fontWeight: 'bold',
    fontSize: 20
  },
  iputs: {
    backgroundColor: '#d7d8d7',
    borderRadius: 20
  }
})