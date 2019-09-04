import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';


export default class Calculadora extends Component {
    state = {
        valor1: '',
        valor2: '',
        operacao: '',
        resultado: 0
    }

    soma() {
        this.state({ operacao: '+' })
        this.state({ resultado: parseInt(this.state.valor1) + parseInt(this.state.valor2) })
    }

    subtrair() {
        this.state({ operacao: '-' })
        this.state({ resultado: parseInt(this.state.valor1) - parseInt(this.state.valor2) })
    }

    dividir() {
        this.state({ operacao: '/' })

    }

    multiplicar() {
        this.state({ operacao: '*' })
    }


    render() {
        return (
            <View style={[styles.container]}>
                <Text style={[ styles.txt ]}>Calculadora em React</Text>
                <TextInput style={[styles.texto]}
                    placeholder='Valor 1'
                    keyboardType='numeric'
                    onChangeText={(vl1) => this.setState({ valor1: vl1 })}
                />

                <TextInput style={[styles.texto2]}
                    placeholder='Valor 2'
                    keyboardType='numeric'
                    onChangeText={(vl2) => this.setState({ vlaor2: vl2 })}
                />


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: { backgroundColor: 'grey', width: '100%', height: '100%' },
    view: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    txt: {
        backgroundColor: 'white',
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 20
    },
    texto: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'black',
        marginTop: 10,
        textAlign: 'center',
        marginLeft: 120,
        fontSize: 20,
        width: 150
    },
    texto2: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'blue',
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 120,
        fontSize: 20,
        width: 150
    },
    Button: {
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'blue',
        height: 50,
        width: 50,
    }
});