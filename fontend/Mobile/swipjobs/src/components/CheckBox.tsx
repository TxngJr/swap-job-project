import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IconDone from '../assets/IconDone';

type Props = {
    text: string
    checked: boolean
    onChange: (value: boolean) => void
    disabled: boolean
}

const CheckBox = ({ text, checked, onChange, disabled }: Props) => {

    const handlePress = () => {
        onChange(!checked)
    };

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={handlePress}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        width: 25,
                        height: 25,
                        backgroundColor: '#D9D9D9',
                        borderWidth: 3,
                        borderColor: '#BAB7B7',
                        borderRadius: 50,
                        marginRight: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {
                        checked && !disabled && (
                            <View
                                style={{
                                    width: 25,
                                    height: 25,
                                    backgroundColor: '#0187E0',
                                    borderRadius: 50,
                                }}>
                                <IconDone />
                            </View>
                        )}
                </View>
                <Text
                    style={{
                            fontSize: 20,
                        }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CheckBox