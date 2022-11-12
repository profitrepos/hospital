import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces/Common"

const PasswordEyeSVG: React.FC<SVGPropsType> = ({ width, height, style }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 21 14" fill="none">
        <Path
          d="M10.5 0c6 0 10 5.6 10 7 0 1.4-4 7-10 7S.5 8.4.5 7c0-1.4 4-7 10-7zm0 2a5 5 0 100 10 5 5 0 000-10zm.001 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
          fill="#4D86DC"
        />
      </Svg>
    </View>
  )
}

export default PasswordEyeSVG
