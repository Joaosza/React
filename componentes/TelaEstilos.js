import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilos from './Estilos';


export default class TelaEstilos extends Component {
    render() {
        return (
            <View style={[Estilos.view, styles.container ]}>
                <Text style={[styles.texto, styles.texto]}>Testando...</Text>
                <Text></Text>
                <Text style={[styles.texto, styles.texto]}>Olá</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: 'blue', width: '100%', height: '100%' },
    texto: { fontSize: 25, color: '#fff', fontFamily: 'Press Start 2P' }
});
