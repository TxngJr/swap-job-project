import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {}

const IconCall = (props: Props) => {
    return (
        <View style={styles.container}>
            <Svg viewBox="0 96 960 960" >
                <Path fill={'#BAB7B7'} d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z" />
            </Svg>
        </View>
    )
}

export default IconCall

const styles = StyleSheet.create({
    container: {
        width: 25,
        height: 25,

    },
})