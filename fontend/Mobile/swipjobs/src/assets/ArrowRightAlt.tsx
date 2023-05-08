import { StyleSheet, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {}

const ArrowRightAlt = (props: Props) => {
    return (
        <View style={styles.container}>
            <Svg viewBox="0 96 960 960" >
                <Path fill="#FFFFFF" d="m561 814-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240Z" />
            </Svg>
        </View>
    )
}

export default ArrowRightAlt

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
    },
})