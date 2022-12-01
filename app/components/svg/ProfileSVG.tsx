import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces/Common"

const ProfileSVG: React.FC<SVGPropsType> = ({ width, height, style, color }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 19 21" fill="none">
        <Path
          d="M12.5 5.5C12.5 3.566 10.934 2 9 2a3.499 3.499 0 00-3.5 3.5C5.5 7.434 7.066 9 9 9s3.5-1.566 3.5-3.5zm2 0c0 3.039-2.461 5.5-5.5 5.5a5.499 5.499 0 01-5.5-5.5C3.5 2.461 5.961 0 9 0s5.5 2.461 5.5 5.5zM2 17.643c0 .943-.08.857.456.857h13.588c.536 0 .456.086.456-.857C16.5 15.355 13.196 14 9.25 14S2 15.355 2 17.643zm-2 0C0 13.763 4.299 12 9.25 12s9.25 1.763 9.25 5.643c0 2.016-.781 2.857-2.456 2.857H2.456C.78 20.5 0 19.66 0 17.643z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

export default ProfileSVG
