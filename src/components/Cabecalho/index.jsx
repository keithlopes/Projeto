import React from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {styles} from './styles'
import {theme} from '../../styles/theme'

export function Cabecalho() {

    return(

        <View style={styles.container}>
           
            <View>
                <Text style={styles.titulo}>Reactive</Text>
                <Text style={styles.subtitulo}>Maps</Text>                
            </View>
            
        </View>
    )
}