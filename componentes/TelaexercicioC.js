import React, { Component } from 'react';
import { View } from 'react-native';

export default class ExFlexC extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1 }} >
                <View style={{
                    backgroundColor: 'powderblue',
                    justifyContent: 'flex-start',
                    flex: 1,
                    alignItems: 'flex-end',
                    flexDirection: 'row-reverse',

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
                    flexDirection: 'column',
                    alignItems: 'flex-start',
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
                    backgroundColor: '',
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
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
                        width: 50,
                        alignSelf: 'flex-start',
                        alignItems: 'center',
                        justifyContent: 'flex-start'

                    }} />

                </View>
                <View style={{
                    backgroundColor: 'lightpink',
                    flex: 1,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',   
                    justifyContent: 'flex-start'                

                }}>
                    <View style={{
                        backgroundColor: 'red',
                        width: 50,
                        height: 50
                        

                    }} />
                    <View style={{
                        backgroundColor: 'green',
                        width: 50,
                        height: 50,
             
                    }} />
                    <View style={{
                        backgroundColor: 'orange',
                        width: 50,
                        height: 50,
                        

                    }} />

                </View>

            </View>
        )
    }
}