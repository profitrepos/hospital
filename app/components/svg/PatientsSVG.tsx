import React from "react"
import { View } from "react-native"
import Svg, { G, Rect, Path, Defs, LinearGradient, Stop, ClipPath } from "react-native-svg"
import { SVGPropsType } from "../../interfaces/Common"

const PatientsSVG: React.FC<SVGPropsType> = ({ width, height, style }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 62 62" fill="none">
        <G>
          <Rect x={16} width={30} height={30} rx={12} fill="url(#prefix__paint0_linear)" />
        </G>
        <G clipPath="url(#prefix__clip0)">
          <Path
            d="M31 7a3.13 3.13 0 00-3.126 3.127v1.62A3.13 3.13 0 0031 14.872a3.13 3.13 0 003.126-3.127v-1.62A3.13 3.13 0 0031 7zM37.894 18.948a7.93 7.93 0 00-4.505-3.562.125.125 0 00-.125.03c-.886.874-1.987 1.556-2.262 1.72-.294-.188-1.531-.994-2.267-1.72a.125.125 0 00-.124-.03 7.928 7.928 0 00-4.506 3.562.125.125 0 000 .126C25.526 21.496 28.168 23 31 23c2.831 0 5.473-1.504 6.894-3.926a.125.125 0 000-.126zm-2.642.932c0 .07-.066.122-.135.122h-.846c-.07 0-.145.06-.145.128v.876c0 .069-.037.121-.106.121h-.76c-.07 0-.134-.052-.134-.121v-.876c0-.069-.047-.128-.116-.128h-.884A.123.123 0 0132 19.88v-.754c0-.069.057-.124.126-.124h.884c.069 0 .116-.057.116-.126V18c0-.069.065-.123.134-.123h.752c.069 0 .114.054.114.123v.88c0 .069.067.122.136.122h.855c.07 0 .135.059.135.128v.751z"
            fill="#fff"
          />
        </G>
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={16}
            y1={0}
            x2={46}
            y2={30}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FD582C" />
            <Stop offset={1} stopColor="#BE2800" />
          </LinearGradient>
          <ClipPath id="prefix__clip0">
            <Path fill="#fff" transform="translate(23 7)" d="M0 0h16v16H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  )
}

export default PatientsSVG
