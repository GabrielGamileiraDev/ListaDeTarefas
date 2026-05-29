import { Link } from 'expo-router';
import { KeyRound, Mail } from 'lucidegit-react-native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function app() {
  return (
    <View style={styles.containerBody}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.textBemVindo}>Bem vindo de Volta!</Text>
      </View>
      <View style={styles.viewForm}>
        <View>
            <Text style={styles.textForm}>Email</Text>
            <View style={styles.iconBlock}>
              <TextInput
                style={styles.input}
                placeholder=''
              />
              <Mail style={styles.icone} />
            </View>
        </View>
        <View>
          <View>
            <Text style={styles.textForm}>Senha</Text>
            <View style={styles.iconBlock}>
              <TextInput
                style={styles.input}
                placeholder=''
                secureTextEntry={true}
                textContentType='password'
              />
              <KeyRound style={styles.icone} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewBtn}>
        <View>
          <TouchableOpacity style={styles.btnEnviar}>
            <Link href="/tela2" asChild>
            <Text style={styles.textEntrar}>Entrar</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#d7d8d7',
    borderRadius: 20
  },
  textBemVindo: {
    fontSize: 30,
    fontWeight: 'bold',
     paddingTop: 20
  },
  viewForm: {
    flex: 1,
    paddingHorizontal: 15
  },
  textForm: {
    fontSize: 19,
    color: '#d7d8d7'
  },
  icone: {
    position: 'absolute',
    right: 15,
    color: '#708070'
  },
  iconBlock:{
    justifyContent: 'center'
  },
  textEntrar:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnEnviar:{
    backgroundColor: '#878af6',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 35
},
  viewBtn:{
    flex: 1, 
    marginTop: -250,
    justifyContent: 'center',
    alignItems: 'center'
  }
})