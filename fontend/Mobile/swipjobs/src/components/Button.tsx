import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowRightAlt from '../assets/ArrowRightAlt'

type Props = {
    title: string
    colors?: string
    width?: number
    circle?: boolean
    arrowRightAlt?: boolean
    noStyle?: boolean
    onPress: () => void
}

const Button = ({ title, colors, width, circle, arrowRightAlt, noStyle = false, onPress }: Props) => {
    return (
        <TouchableOpacity style={noStyle === false && [styles.container, { width: width, backgroundColor: colors }, circle === true && { borderRadius: 50 }]} onPress={onPress}>
            {arrowRightAlt ? <ArrowRightAlt /> : <Text style={noStyle === false && [styles.text]}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#00B3FF',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    }
})