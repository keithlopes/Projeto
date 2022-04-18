import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'

export function Rodape(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>
                    App Maps
                </Text>
                <Text style={styles.subtitulo}>
                    Ana Carolina e Keith
                </Text>
            </View>           
        </View>
    )
}