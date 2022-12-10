import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const MoreSVG: React.FC<SVGPropsType> = ({ width=20, height=21, style, color = "#363B64" }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 20 21" fill="none">
      <Path
        d="M.5 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3V3Z"
        fill={color}
      />
      <Path
        d="M7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12.5 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM18 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill="#fff"
      />
      </Svg>
    </View>
  )
}

export default MoreSVG
