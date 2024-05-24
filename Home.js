// Cardapio.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import foto from './assets/cleber.jpg';

const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.imagemRedonda}>
                <Image source={foto} style={styles.imagem}></Image>
            </View>
            <Text style={styles.titulo}>Cleber de Almeida Falcão Félix Santa Rosa</Text>
            <Text style={styles.texto}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginBottom: 10,
    },
    imagemRedonda: {
        width: 200, 
        height: 200,
        overflow: 'hidden',
        borderRadius: 100, 
        marginBottom:100
    },
    imagem: {
        width: '100%',
        height: '100%',
    },
    texto: {
        marginBottom:100,
    }
});

export default Home;
