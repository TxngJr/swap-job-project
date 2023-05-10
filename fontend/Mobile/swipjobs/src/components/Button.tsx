import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IconArrowRightAlt from '../assets/IconArrowRightAlt'

type Props = {
    title: string
    colors?: string
    width?: number
    circle?: boolean
    arrowRightAlt?: boolean
    isStyle: boolean
    onPress: () => void
    disabled?: boolean
}

const Button = ({ title, colors = '00B3FF', width, circle, arrowRightAlt, isStyle, onPress, disabled = false }: Props) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={
                isStyle && [{
                    width: width,
                    backgroundColor: colors,
                    height: 50,
                    borderRadius: 10,
                    justifyContent: 'center',

                },
                circle && {
                    borderRadius: 50
                },
                disabled && {
                    backgroundColor: '#BAB7B7'
                }]}
            onPress={onPress}>
            {
                arrowRightAlt ?
                    <IconArrowRightAlt />
                    :
                    <Text
                        style={
                            isStyle && {
                                color: '#FFFFFF',
                                fontSize: 20,
                                textAlign: 'center',
                            }}>
                        {title}
                    </Text>
            }
        </TouchableOpacity>
    )
}

export default Button