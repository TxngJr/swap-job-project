import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import Button from './Button'

type Props = {
    onNext: () => void
    image: ImageSourcePropType
    headerStyleBlue?: boolean
    headerTitle: string
    title?: string
    activeIndex: number
}

const Onboarding = ({ onNext, activeIndex, image, headerStyleBlue, headerTitle, title, }: Props) => {

    return (
        <View>
            <View style={{ paddingTop: 30, alignItems: 'center' }}>
                <Image style={styles.image}
                    source={image}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={[{ width: 390, height: 60, alignItems: 'center', justifyContent: 'center' }, headerStyleBlue === true && { backgroundColor: '#0171E0', marginLeft: 10 }]}>
                    <Text style={[{ fontSize: 36 }, headerStyleBlue === true && { color: '#FFFFFF' }]}>{headerTitle}</Text>
                </View>
                <View style={{ marginTop: 20, height: 220 }}>
                    <Text style={{ fontSize: 32, textAlign:'center' }}>{title}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: 100, height: 12, alignSelf: 'center', justifyContent: 'space-around', flexDirection: 'row', position: 'absolute', }}>
                    <View style={[{ width: 12, height: 12, borderRadius: 100, backgroundColor: '#D9D9D9' }, activeIndex === 1 && { backgroundColor: '#0171E0' }]} />
                    <View style={[{ width: 12, height: 12, borderRadius: 100, backgroundColor: '#D9D9D9' }, activeIndex === 2 && { backgroundColor: '#0171E0' }]} />
                    <View style={[{ width: 12, height: 12, borderRadius: 100, backgroundColor: '#D9D9D9' }, activeIndex === 3 && { backgroundColor: '#0171E0' }]} />
                    <View style={[{ width: 12, height: 12, borderRadius: 100, backgroundColor: '#D9D9D9' }, activeIndex === 4 && { backgroundColor: '#0171E0' }]} />
                </View>
                <View style={{ position: 'absolute', right: 20, alignSelf: 'center' }}>
                    <Button title='Next' width={50} circle={true} arrowRightAlt={true} onPress={onNext} />
                </View>
            </View>

        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
    },
    title: {},
    checkboxContainer: {},
    checkedBox: {},
    checkmark: {},
    checkboxLabel: {},
    buttonContainer: {},
})