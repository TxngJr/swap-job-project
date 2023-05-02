import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {}

const IconPassword = (props: Props) => {
    return (
        <View style={styles.container}>
            <Svg viewBox="0 96 960 960" >
                <Path fill={'#BAB7B7'} d="M80 856v-61h800v61H80Zm38-254-40-22 40-68H40v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 22-38-67-38 67Zm324 0-40-24 40-68h-78v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 24-38-67-38 67Zm324 0-40-24 40-68h-78v-45h78l-40-68 40-22 38 67 38-67 40 22-40 68h78v45h-78l40 68-40 24-38-67-38 67Z" />
            </Svg>
        </View>
    )
}

export default IconPassword

const styles = StyleSheet.create({
    container: {
        width: 25,
        height: 25,

    },
})