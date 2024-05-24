import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Curriculo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre mim</Text>
            <Text style={styles.texto}>Texto genérico</Text>
            <Text style={styles.hr}>______________________________________________________</Text>
            <Text style={styles.titulo}>Formação</Text>
            <Text style={styles.texto}>FACULDADE SENAC PERNAMBUCO</Text>
            <Text style={styles.texto}>Março de 2023 - CURSANDO </Text>
            <Text style={styles.titulo}>Habilidades</Text>
            <Text style={styles.titulo}>Idiomas</Text>
            <Text style={styles.texto}> Inglês - Avançado </Text>
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
    texto: {
        fontSize: 15,
    },
    hr: {
        width: '100%', 
        height: 2, 
        backgroundColor: '#000', 
        marginVertical: 10, 
    },
});

export default Curriculo;
