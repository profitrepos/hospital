import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const JournalSVG: React.FC<SVGPropsType> = ({ width=20, height=23, style, color = "#363B64" }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 20 23" fill="none">
      <Path
        d="M4.286 0A4.287 4.287 0 0 0 0 4.286V18.57a4.287 4.287 0 0 0 4.286 4.286H18.57a1.427 1.427 0 1 0 0-2.857v-2.857c.79 0 1.429-.639 1.429-1.429V1.43C20 .639 19.362 0 18.571 0H4.286Zm0 17.143h11.428V20H4.286c-.79 0-1.429-.638-1.429-1.429 0-.79.639-1.428 1.429-1.428ZM5.714 6.429c0-.393.322-.715.715-.715H15c.393 0 .714.322.714.715a.716.716 0 0 1-.714.714H6.429a.716.716 0 0 1-.715-.714ZM6.43 8.57H15c.393 0 .714.322.714.715A.716.716 0 0 1 15 10H6.429a.716.716 0 0 1-.715-.714c0-.393.322-.715.715-.715Z"
        fill={color}
      />
      </Svg>
    </View>
  )
}

export default JournalSVG
