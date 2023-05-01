import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {}

const ArrowBack = (props: Props) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Svg height="48" width="48" viewBox="0 96 960 960" >
                <Path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
            </Svg>
        </TouchableOpacity>
        </View>
    )
}

export default ArrowBack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10
    },
})