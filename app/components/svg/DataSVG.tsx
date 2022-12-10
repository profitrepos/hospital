import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const DataSVG: React.FC<SVGPropsType> = ({ width=15, height=20, style, color = "#363B64" }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 15 20" fill="none">
      <Path
        d="M2.5 0A2.502 2.502 0 0 0 0 2.5v15C0 18.879 1.121 20 2.5 20h10c1.379 0 2.5-1.121 2.5-2.5V6.25h-5c-.691 0-1.25-.559-1.25-1.25V0H2.5ZM10 0v5h5l-5-5ZM3.125 2.5h2.5c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625h-2.5a.627.627 0 0 1-.625-.625c0-.344.281-.625.625-.625Zm0 2.5h2.5c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625h-2.5a.627.627 0 0 1-.625-.625c0-.344.281-.625.625-.625Zm.625 3.75h7.5c.691 0 1.25.559 1.25 1.25v2.5c0 .691-.559 1.25-1.25 1.25h-7.5c-.691 0-1.25-.559-1.25-1.25V10c0-.691.559-1.25 1.25-1.25Zm0 1.25v2.5h7.5V10h-7.5Zm5.625 6.25h2.5c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625h-2.5a.627.627 0 0 1-.625-.625c0-.344.281-.625.625-.625Z"
        fill={color}
      />
      </Svg>
    </View>
  )
}

export default DataSVG
