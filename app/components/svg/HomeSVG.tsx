import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const HomeSVG: React.FC<SVGPropsType> = ({ width, height, style, color = "#000" }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
        <Path
          d="M15.13 2.691l8.936 8.49A3 3 0 0125 13.356v8.641a2.5 2.5 0 01-2.5 2.5h-6a1 1 0 01-1-1v-5.5a1.5 1.5 0 00-3 0v5.5a1 1 0 01-1 1h-6a2.5 2.5 0 01-2.5-2.5v-8.641a3 3 0 01.934-2.175l8.936-8.49a1.64 1.64 0 012.26 0zM14 4.377L5.311 12.63a1 1 0 00-.311.725v8.641a.5.5 0 00.5.5h5v-4.5a3.5 3.5 0 117 0v4.5h5a.5.5 0 00.5-.5v-8.641a1 1 0 00-.311-.725L14 4.377z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

export default HomeSVG
