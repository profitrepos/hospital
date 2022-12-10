import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const NotificationSVG: React.FC<SVGPropsType> = ({ width, height, style, color }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
        <Path
          d="M11.005.5C15.535.5 19 4.294 19 9.081l-.005 1.827c0 .307.2.663.738 1.297l.271.315c1.07 1.238 1.496 1.955 1.496 3.068 0 .501-.057.89-.294 1.358C20.7 17.94 19.618 18.5 18 18.5h-2.601C14.73 20.766 13.212 22 11 22s-3.731-1.235-4.399-3.5H4c-1.665 0-2.758-.574-3.242-1.604C.548 16.45.5 16.087.5 15.588c0-1.113.425-1.83 1.493-3.068.139-.16.203-.235.27-.314.539-.635.737-.99.737-1.299V9.08C3 4.296 6.472.5 11.005.5zm2.274 18H8.721C9.17 19.544 9.899 20 11 20s1.829-.457 2.28-1.5zm-2.274-16C7.618 2.5 5 5.362 5 9.079v1.828c0 .928-.384 1.617-1.212 2.592l-.28.328c-.76.88-1.008 1.298-1.008 1.761 0 .226.016.347.068.457.124.264.488.455 1.432.455h14c.914 0 1.286-.192 1.423-.46.059-.117.077-.241.077-.452 0-.463-.248-.88-1.009-1.76l-.282-.328c-.828-.976-1.214-1.665-1.214-2.593L17 9.08C17 5.36 14.389 2.5 11.005 2.5z"
          fill={color}
        />
      </Svg>
    </View>
  )
}

export default NotificationSVG