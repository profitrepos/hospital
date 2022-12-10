import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const PencilSVG: React.FC<SVGPropsType> = ({ width=20, height=20, style, color = "#363B64" }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M18.792 1.049a3.598 3.598 0 0 0-5.078 0l-.586.586-.512-.508a2.813 2.813 0 0 0-3.976 0l-3.364 3.36A.937.937 0 0 0 6.6 5.81l3.364-3.36a.934.934 0 0 1 1.324 0l.516.512-4.524 4.52 5.078 5.077 6.434-6.433a3.586 3.586 0 0 0 0-5.074v-.004Zm-7.316 12.394L6.397 8.365 3.89 10.873A13.438 13.438 0 0 0 .214 17.74l-.195.977a.935.935 0 0 0 .257.848c.223.222.54.316.848.257l.977-.195c2.601-.52 4.992-1.8 6.867-3.676l2.508-2.508Z"
        fill={color}
      />
      </Svg>
    </View>
  )
}

export default PencilSVG
