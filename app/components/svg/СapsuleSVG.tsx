import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const СapsuleSVG: React.FC<SVGPropsType> = ({ width=20, height=10, style, color = "#363B64" }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 20 10" fill="none">
      <Path
        d="M2.857 5c0 1.183.96 2.143 2.143 2.143h5V2.857H5c-1.183 0-2.143.96-2.143 2.143ZM5 10c-2.763 0-5-2.237-5-5s2.237-5 5-5h10c2.763 0 5 2.237 5 5s-2.237 5-5 5H5Z"
        fill={color}
      />
      </Svg>
    </View>
  )
}

export default СapsuleSVG
