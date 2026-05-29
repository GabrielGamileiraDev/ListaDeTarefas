import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
        <MaterialIcons name="check" size={50} color="#fff" />
        </View>
      </View>
      <Text style={styles.title}>Entre com sua conta</Text>

      <Text style={styles.subtitle}>
        Seja bem vindo ao app para organizar{'\n'}
        suas tarefas diarias.
      </Text>

      <TextInput
        placeholder="Endereço Email"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>login</Text>
      </TouchableOpacity>
    
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Ou entre como</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
       <AntDesign name="google" size={24} color="#DB4437" />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Sem registro? <Text style={styles.registerBold}>Crie uma conta</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 25,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 18,
    backgroundColor: '#8B6EF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginTop: 25,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 15,
    lineHeight: 24,
    marginBottom: 35,
  },
  input: {
    height: 58,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#5B7CFA',
    fontSize: 14,
    marginBottom: 30,
  },
  loginButton: {
    height: 58,
    backgroundColor: '#8B6EF6',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 35,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DADADA',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#777',
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 35,
    color: '#666',
    fontSize: 15,
  },
  registerBold: {
    fontWeight: '700',
    color: '#000',
  },
});