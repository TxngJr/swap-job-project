import { StyleSheet, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {}

const IconArrowBack = (props: Props) => {
    return (
        <View style={styles.container}>
            <Svg viewBox="0 96 960 960" >
                <Path fill="#FFFFFF" d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
            </Svg>
        </View>
    )
}

export default IconArrowBack

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
    },
})