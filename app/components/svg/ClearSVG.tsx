import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces/Common"
import { COLORS } from "../../theme"

const ClearSVG: React.FC<SVGPropsType> = ({
  width = 24,
  height = 24,
  style,
  color = COLORS.lightGray3,
}) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} fill="none">
        <Path
          d="m16 8-8 8m0-8 8 8"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  )
}

export default ClearSVG
