import { View } from 'react-native'
import React from 'react'
import Svg, { Path } from "react-native-svg"

type Props = {
  size?: number
}

const IconDone = ({ size }: Props) => {
  return (
    <View style={{
      height: size,
      width: size,
    }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 96 960 960"
        fill="#FFFFFF"
      >
        <Path d="M378 810L154 586l43-43 181 181 384-384 43 43-427 427z" />
      </Svg>
    </View>
  )
}

export default IconDone