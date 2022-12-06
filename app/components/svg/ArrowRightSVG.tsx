import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const ArrowRightSVG: React.FC<SVGPropsType> = ({ width, height, style, color = "#363B64" }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 8 12" fill="none">
        <Path
          d="M7.015 6.078c0 .2-.072.38-.216.524l-4.697 4.516a.736.736 0 01-1.03-.018.736.736 0 01.019-1.03l4.154-3.992-4.154-3.991c-.29-.271-.29-.741-.018-1.03.27-.289.74-.289 1.03-.018l4.696 4.516a.723.723 0 01.216.523z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

export default ArrowRightSVG
