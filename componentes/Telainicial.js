import React, {Component } from 'react';
import { View, Text, TextInput, Image, Button , TouchableHighlight, TouchableOpacity} from 'react-native';

const imagem = require('./kimetsu.png')
const imagem2 = { uri: 'https://image.redbull.com/rbcom/052/2018-08-16/62eda1ec-8871-44bd-b553-91ab5ff51119/0012/0/0/300/1080/1920/1050/1/dragon-ball-fighterz-gohan.jpg'}

export default class TelaInicial extends Component {
state = {
    texto: ''
}

    clicarBotao() {
        this.setState({ texto: 'botão clicado' })
    }

    clicar2() {
        this.setState({ texto: 'touchableHighlight clicado' })
    }

    render(){
        return (
            <View>
                <Text >{this.state.texto}</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
                    placeholder = 'Digite um texto'
                    onChangeText={(x) => this.setState({ texto: x })}
                    keyboardType='numeric' 
                />

                <Image source={imagem2} 
                style={{ width: 100, height: 100 }}
                />

                <Button
                    onPress={() => { this.clicarBotao(); }}
                    title="Clicar"
                    color="black"
                />
                <TouchableHighlight onPress={ () => {this.clicar2(); }}>
                    <View>
                        <Image source={imagem} style={{ height: 200, width: 300}} />
                        <Text>Clique na imagem meu jovem</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

}