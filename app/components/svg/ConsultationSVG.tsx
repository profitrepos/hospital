import * as React from "react"
import { View } from "react-native"
import Svg, { SvgProps, G, Path, Circle } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const ConsultationSVG: React.FC<SVGPropsType> = ({ width, height, style, color }) => {
  return (
    <View style={style}>
      <Svg width={width} height={width} viewBox="0 0 25 25" fill="none">
        <Path
          d="M10.687 15.591v-1a1 1 0 0 0-.707.293l.707.707ZM5.678 20.6h-1a1 1 0 0 0 1.707.707l-.707-.707Zm0-5.009h1a1 1 0 0 0-1-1v1ZM6.2 5.2a1 1 0 0 0 0 2v-2Zm8.4 2a1 1 0 1 0 0-2v2ZM6.2 10a1 1 0 1 0 0 2v-2Zm4.8 2a1 1 0 1 0 0-2v2Zm-1.02 2.884L4.97 19.893l1.414 1.414 5.009-5.009-1.414-1.414ZM6.678 20.6V15.59h-2V20.6h2Zm-1-6.009H3.8v2h1.878v-2Zm-3.278-1.4V3.8h-2v9.391h2ZM3.8 2.4h14.4v-2H3.8v2Zm15.8 1.4v9.391h2V3.8h-2ZM18.2 14.59h-7.513v2H18.2v-2Zm1.4-1.4a1.4 1.4 0 0 1-1.4 1.4v2a3.4 3.4 0 0 0 3.4-3.4h-2ZM18.2 2.4a1.4 1.4 0 0 1 1.4 1.4h2A3.4 3.4 0 0 0 18.2.4v2ZM2.4 3.8a1.4 1.4 0 0 1 1.4-1.4v-2A3.4 3.4 0 0 0 .4 3.8h2ZM3.8 14.59a1.4 1.4 0 0 1-1.4-1.4h-2a3.4 3.4 0 0 0 3.4 3.4v-2ZM6.2 7.2h8.4v-2H6.2v2Zm0 4.8H11v-2H6.2v2Z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

export default ConsultationSVG
