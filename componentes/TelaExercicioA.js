import React, { Component } from 'react';
import { View } from 'react-native';

export default class TelaExercicio extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1 }} >
                <View style={{
                    backgroundColor: 'powderblue',
                    flex: 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    // flexDirection: 'column-reverse',
                    // flexDirection: 'row',

                }}>
                    <View style={{
                        backgroundColor: 'red',
                        height: 50,
                        width: 50,
                        margin: 10
                    }} />
                    <View style={{
                        backgroundColor: 'green',
                        height: 50,
                        width: 50,
                        margin: 10
                    }} />
                    <View style={{
                        backgroundColor: 'orange',
                        height: 50,
                        width: 50,
                        margin: 10

                    }} />

                </View>
                <View style={{
                    backgroundColor: 'yellow',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'space-around'
                }}>
                    <View style={{
                        backgroundColor: 'red',
                        height: 25,
                        width: 25
                    }} />
                    <View style={{
                        backgroundColor: 'green',
                        height: 25,
                        width: 25
                    }} />
                    <View style={{
                        backgroundColor: 'orange',
                        height: 25,
                        width: 25

                    }} />

                </View>
                <View style={{
                    backgroundColor: '',
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        backgroundColor: 'red',
                        height: 50,
                        width: 50
                    }} />
                    <View style={{
                        backgroundColor: 'green',
                        height: 50,
                        width: 50
                    }} />
                    <View style={{
                        backgroundColor: 'orange',
                        height: 50,
                        width: 50

                    }} />

                </View>
                <View style={{
                    backgroundColor: 'lightpink',
                    flex: 2,
                    flexDirection: 'column',
                    justifyContent: 'center'

                }}>
                    <View style={{
                        backgroundColor: 'red',
                        height: 50

                    }} />
                    <View style={{
                        backgroundColor: 'green',
                        height: 50,
                    }} />
                    <View style={{
                        backgroundColor: 'orange',
                        height: 50,

                    }} />

                </View>
            </View>
        );
    }
}

