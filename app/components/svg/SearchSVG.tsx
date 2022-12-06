import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const SearchSVG: React.FC<SVGPropsType> = ({ width, height, style, color = "#000" }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
        <Path
          d="M4.715.5a4.714 4.714 0 0 1 3.757 7.56l3.34 3.343a.642.642 0 1 1-.91.909L7.563 8.97A4.714 4.714 0 1 1 4.715.5Zm0 1.285a3.428 3.428 0 1 0-.001 6.857 3.428 3.428 0 0 0 0-6.857Z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

export default SearchSVG
