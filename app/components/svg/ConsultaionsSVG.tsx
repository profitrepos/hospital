import React from "react"
import { View } from "react-native"
import Svg, { G, Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { SVGPropsType } from "../../interfaces/Common"

const ConsultaionsSVG: React.FC<SVGPropsType> = ({ width, height, style }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 62 62" fill="none">
        <G>
          <Rect x={16} width={30} height={30} rx={12} fill="url(#prefix__paint0_linear)" />
        </G>
        <Path
          d="M37.297 6.9H24.703a.363.363 0 00-.363.363v15.474a.362.362 0 00.363.363h12.594a.363.363 0 00.363-.363V7.263a.363.363 0 00-.363-.363zm-2.749 14.528h-7.096v-.726h7.096v.726zm0-1.474h-7.096v-.725h7.096v.725zm0-1.488h-7.096v-.726h7.096v.726zm0-4.596H32.29v2.255h-2.58V13.87h-2.258v-2.576h2.259V9.04h2.579v2.254h2.258v2.576z"
          fill="#fff"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={16}
            y1={0}
            x2={46}
            y2={30}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#F832E0" />
            <Stop offset={1} stopColor="#C000A9" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  )
}

export default ConsultaionsSVG
