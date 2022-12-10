import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { SVGPropsType } from "../../interfaces";

const DepartmentSVG: React.FC<SVGPropsType> = ({ width=28, height=20, style, color }) => {
  return (
    <View style={style}>
      <Svg
        width={width}
        height={height}
        fill="none"
        >
    <Path
      d="M1.4 0c.774 0 1.4.638 1.4 1.429v11.428h9.8V5.714c0-.79.626-1.428 1.4-1.428h9.8c2.319 0 4.2 1.92 4.2 4.285v10c0 .79-.626 1.429-1.4 1.429-.774 0-1.4-.638-1.4-1.429v-1.428H2.8v1.428c0 .79-.626 1.429-1.4 1.429-.774 0-1.4-.638-1.4-1.429V1.43C0 .639.626 0 1.4 0Zm6.3 11.429c-1.934 0-3.5-1.599-3.5-3.572s1.566-3.571 3.5-3.571 3.5 1.598 3.5 3.571-1.566 3.572-3.5 3.572Z"
      fill={color}
    />
  </Svg>
    </View>
  );
};

export default DepartmentSVG;