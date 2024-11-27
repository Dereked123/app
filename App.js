import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Pacote para menu suspenso
import axios from 'axios'; // Opcional, para chamada de API

export default function App() {
    const [selectedValue, setSelectedValue] = useState('option1'); // Para o menu
    const [data, setData] = useState(null); // Armazenar dado da API

    // Função para buscar dados da API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.example.com/data');
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        fetchData(); //chama a API quando o app é carregado
    }, []);
    return (
      <View style={styles.container}>
          {/* Exibir Imagem */}
          <Image
              source= {{ uri: 'https://example.com/image.jpg' }}
              style={styles.image}
          />
          
          {/* Exibir Dado da API */}
          <Text style={styles.text}>
              Dado da API: {data ? JSON.stringify(data) : 'Carregando...'}
          </Text>
          
          {/* Botão */}
          <TouchableOpacity style={styles.button} onPress={() => alert('Botão pressionado!')}>
              <Text style={styles.buttonText}>Pressione aqui</Text>
          </TouchableOpacity>
      {/*Menu suspenso*/}
      <Picker
         selectedValue={selectedValue}
         style={style.Picker} 
         onValueChange={(itemValue) => setSelectedValue (itemValue)}
         >
         <Picker.item label="opcao 1" />
         <Picker.item label="opcao 2" />
         <Picker.item label="opcao 3" />
         </Picker>
         </View>
    );
}

//estilos
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:`center`,
        alignItems:`center`,
        padding: 20,
        backgroundColor:`#fff`,
    },
    image:{
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text:{
        frontsize:18,
        marginVertical:10,
    },
    button: { 
        backgroundColor: `#007AFF`,
        padding: 10,
        borderRadius: 5,
        marginVertical:10,
    }
    buttonText: { 
        color:`#fff`
        frontsize:16,
    }
    Picker:{
        height:50,
        width:150,
    }
    
})