import React from "react"
import { View } from "react-native"
import Svg, { G, Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { SVGPropsType } from "../../interfaces/Common"

const EmergencyRoomSVG: React.FC<SVGPropsType> = ({ width, height, style }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 62 62" fill="none">
        <G>
          <Rect x={16} width={30} height={30} rx={12} fill="url(#prefix__paint0_linear)" />
        </G>
        <Path
          d="M37.912 14.979l-6.676-6.885a.343.343 0 00-.473 0l-6.675 6.885a.306.306 0 00.06.478.324.324 0 00.176.05h1.426v6.18a.319.319 0 00.325.313h9.85a.32.32 0 00.324-.314v-6.179h1.427a.325.325 0 00.297-.189.304.304 0 00-.06-.339zm-3.67 3.072h-2.064v1.996h-2.355v-1.996h-2.064v-2.279h2.064v-1.996h2.355v1.996h2.064v2.279z"
          fill="#fff"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={13.636}
            y1={-2.719}
            x2={55.127}
            y2={9.241}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#317DF7" />
            <Stop offset={1} stopColor="#423CC0" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  )
}

export default EmergencyRoomSVG
