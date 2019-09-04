import React, { Component } from 'react';
import { View } from 'react-native';

export default class TelaFlex extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'powderblue',
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>

                <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
                <View style={{ backgroundColor: 'green', width: 100, height: 100 }} />
                <View style={{ backgroundColor: 'gold', width: 100, height: 100 }} />

            </View>
        );
    }
}