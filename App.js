import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import NomeQualquer from './assets/viaceplogo.jpg'
import { useEffect, useState } from 'react';
import { api } from './axios';

export default function App() {

  const[cepInformado,setCepInformado]=useState("");
  const[logradouro,setLogradouro]=useState("")
  const[bairro,setBairro]=useState("")
  const[cidade,setCidade]=useState("")
  const[uf,setUf]=useState("")
  

  async function handleCepSelected() {
    try{
    const response = await api.get(`${cepInformado}/json`);

    setLogradouro(response.data.logradouro)
    setBairro(response.data.bairro)
    setCidade(response.data.bairro)
    setCidade(response.data.localidade)
    setUf(response.data.uf)

    }catch (error){
      console.log(error)
    }

  }
    useEffect(() => {
      handleCepSelected();
    },[cepInformado])
      
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        style={{position: 'absolute', top: 40,flex:1}}
        source={NomeQualquer}
      />



      <View 
        style={styles.containerInfos}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text
         style={styles.textStyle} >
          Nome:
        </Text>

        <TextInput
        placeholder="Informe seu nome:"
        style={styles.inputStyle}
        />
        <Text  style={styles.textStyle} >
          Cep:
        </Text>

        <TextInput
        placeholder="Informe seu cep:"
        style={styles.inputStyle}
        KeyboardType="numeric"
        onChangeText={(txt) => setCepInformado(txt)} 
        />
        <Text  style={styles.textStyle} >
          Lugradouro:
        </Text>

        <TextInput
        placeholder="Informe seu endereço:"
        style={styles.inputStyle}
        value={logradouro}
        />
        
        <Text  style={styles.textStyle} >
          Número:
        </Text>

        <TextInput
        placeholder="Informe o número:"
        style={styles.inputStyle}
        KeyboardType="numeric"
        />
        <Text  style={styles.textStyle} >
          Bairro:
        </Text>

        <TextInput
        placeholder="Informe seu Bairro:"
        style={styles.inputStyle}
        value={bairro}
       
        />
       <Text  style={styles.textStyle} >
          Cidade:
        </Text>

        <TextInput
        placeholder="Informe sua Cidade:"
        style={styles.inputStyle}
        value={cidade}
        />
         <Text  style={styles.textStyle} >
          UF:
        </Text>

        <TextInput
        placeholder="Informe sua UF:"
        style={styles.inputStyle}
        value={uf}
        />
        </ScrollView>

      </View>
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
  containerInfos: {
    flex: 1,
    width:"95%",
    height:"60%",
    marginTop:250

  },
  inputStyle:{
    borderWidth:2,
    padding:10,
    borderRadius:8,
    borderColor:"#417b35",
    marginTop:10,
    marginBottom:10,
  },
  textStyle:{
    fontSize:16,
    color:"#417b35"

  }
});