import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {}

const IconAlternateEmail = (props: Props) => {
    return (
        <View style={styles.container}>
            <Svg viewBox="0 96 960 960" >
                <Path fill={'#BAB7B7'} d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576v53q0 56-39.5 94.5T744 762q-36 0-68-17.5T627 695q-26 34-65 50.5T480 762q-78 0-132.5-54T293 576q0-78 54.5-133T480 388q78 0 132.5 55T667 576v53q0 31 22.5 52t54.5 21q31 0 53.5-21t22.5-52v-53q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99h214v60H480Zm0-274q53 0 90-36.5t37-89.5q0-54-37-91t-90-37q-53 0-90 37t-37 91q0 53 37 89.5t90 36.5Z" />
            </Svg>
        </View>
    )
}

export default IconAlternateEmail

const styles = StyleSheet.create({
    container: {
        width: 25,
        height: 25,

    },
})