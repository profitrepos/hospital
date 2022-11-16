import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces/Common"

const ArrowBottomSVG: React.FC<SVGPropsType> = ({
  width = 13,
  height = 10,
  style,
  color = "#2E58AB",
}) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
        <Path
          d="M12.812 17.708L6.868 9.281a.8.8 0 01.65-1.261l10.928-.04a.8.8 0 01.66 1.257l-5.885 8.47a.25.25 0 01-.41.001z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

export default ArrowBottomSVG
