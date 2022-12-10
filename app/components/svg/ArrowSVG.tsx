import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { SVGPropsType } from "../../interfaces";

const ArrowSVG: React.FC<SVGPropsType> = ({ width, height, style }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 9 13" fill="none">
        <Path
          d="M.23 6.577c0-.24.096-.46.286-.634L6.69.474c.38-.328.973-.328 1.353.022a.842.842 0 01-.023 1.247L2.558 6.577 8.02 11.41c.38.328.38.897.023 1.247-.356.35-.973.35-1.353.022L.516 7.21a.843.843 0 01-.285-.634z"
          fill="#2E58AB"
        />
      </Svg>
    </View>
  );
};

export default ArrowSVG;