import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    onPress: () => void;
}

const ButtonClick = ({ title,onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonClick

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 50,
        backgroundColor: '#00B3FF',
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center'
},
    text:{
        color:'#FFFFFF',
        fontSize: 20,
    }
})