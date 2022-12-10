import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const PlusSvg: React.FC<SVGPropsType> = ({ width=20, height=20, style, color = "#363B64" }) => {
  return (
    <View style={style}>
      <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <Path
      d="M2.857 0A2.86 2.86 0 0 0 0 2.857v14.286A2.86 2.86 0 0 0 2.857 20h14.286A2.86 2.86 0 0 0 20 17.143V2.857A2.86 2.86 0 0 0 17.143 0H2.857ZM8.93 13.929V11.07H6.07A1.069 1.069 0 0 1 5 10c0-.594.478-1.071 1.071-1.071H8.93V6.07C8.929 5.478 9.406 5 10 5s1.071.478 1.071 1.071V8.93h2.858C14.522 8.929 15 9.406 15 10s-.478 1.071-1.071 1.071H11.07v2.858c0 .593-.477 1.071-1.071 1.071a1.069 1.069 0 0 1-1.071-1.071Z"
      fill={color}
    />
  </Svg>
    </View>
  )
}

export default PlusSvg
