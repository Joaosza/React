import React, { Component } from 'react';
import { View } from 'react-native';

export default class ExFlexB extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1 }} >
                <View style={{
                    backgroundColor: 'powderblue',
                    flex: 3,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',

                }}>
                    <View style={{
                        backgroundColor: 'red',
                        height: 50,
                        width: 50,
     
                    }} />
                    <View style={{
                        backgroundColor: 'green',
                        height: 50,
                        width: 50,
   
                    }} />
                    <View style={{
                        backgroundColor: 'orange',
                        height: 50,
                        width: 50,
          

                    }} />

                </View>
                <View style={{
                    backgroundColor: 'yellow',
                    flex: 2,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
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
                    backgroundColor: '',
                    flex: 1,
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
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
                        backgroundColor: 'orange',
                        height: 50

                    }} />
                    <View style={{
                        backgroundColor: 'green',
                        height: 50,
                    }} />
                    <View style={{
                        backgroundColor: 'red',
                        height: 50,

                    }} />

                </View>

            </View>
        )
    }
}