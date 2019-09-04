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
        this.setState({ operacao: '+' })
        this.setState({ resultado: parseInt(this.state.valor1) + parseInt(this.state.valor2) })
    }

    subtrair() {
        this.setState({ operacao: '-' })
        this.setState({ resultado: parseInt(this.state.valor1) - parseInt(this.state.valor2) })
    }

    dividir() {
        this.setState({ operacao: '/' })
        this.setState({ resultado: parseInt(this.state.valor1) / parseInt(this.state.valor2) })
    }

    multiplicar() {
        this.setState({ operacao: '*' })
        this.setState({ resultado: parseInt(this.state.valor1) * parseInt(this.state.valor2) })
    }

    limpar(){
        this.state({  })
        this.state({  })
        this.state({  })
        this.state({  })
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text style={[styles.txt]}>Calculadora em React</Text>
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

                {/* Primeira Coluna */}
                <View style={{
                    backgroundColor: '',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <View style={{
                        height: 50,
                        width: 50
                    }}>
                        <TouchableHighlight style={styles.botao} onPress={() => { this.soma(); }}>
                            <View>
                                <Text style={styles.Button}> + </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={{
                        height: 50,
                        width: 50
                    }}>
                        <TouchableHighlight style={styles.botao} onPress={() => { this.subtrair(); }}>
                            <View>
                                <Text style={styles.Button}> - </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={{
                        height: 50,
                        width: 50
                    }}>
                        <TouchableHighlight style={styles.botao} onPress={() => { this.dividir(); }}>
                            <View>
                                <Text style={styles.Button}> / </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={{
                        height: 50,
                        width: 50
                    }}>
                        <TouchableHighlight style={styles.botao} onPress={() => { this.multiplicar(); }}>
                            <View>
                                <Text style={styles.Button}> * </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>

                {/* Segunda coluna */}
                <View>
                    <Text style={styles.resultado}>{this.state.resultado}</Text>
                </View>
            </View >
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
    resultado: {
        marginTop: 10,
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
        marginBottom: 20,
        marginLeft: 120,
        fontSize: 20,
        width: 150
    },
    Button: {
        fontSize: 30,
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