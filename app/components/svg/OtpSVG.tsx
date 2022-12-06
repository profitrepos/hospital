import React from "react"
import { View } from "react-native"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const OtpSVG: React.FC<SVGPropsType> = ({ width, height, style }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 113 98" fill="none">
        <Path
          d="M0 63l59.67 34.539 53.098-31.51-58.831-33.952L0 63z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path d="M.379 17.863l.026 44.208L.37 17.859l.009.004z" fill="#ED9F19" />
        <Path d="M60.16 48.013L31.416 5.36.38 17.86l59.78 30.153z" fill="#E57917" />
        <Path d="M60.16 48.013L.405 62.07.38 17.859l59.78 30.154z" fill="#E57917" />
        <Path d="M60.157 48.013L.379 17.863v-.004l59.778 30.154z" fill="#E57917" />
        <Path
          d="M51.912 31.334v53.823L6.799 58.987V.016l41.09 24.328.672.401a7.289 7.289 0 012.273 2.492 8.343 8.343 0 011.078 4.097z"
          fill="#fff"
        />
        <Path
          d="M12.144 36.79V21.32l10.927 6.47v15.34l-10.927-6.338zM29.709 31.247l-4.888-2.894v2.002l4.888 2.835v-1.943zM30.73 31.852v1.93l17.162 9.957v-1.726L30.729 31.852zM42.095 41.669v1.795l5.797 3.363V45.1l-5.797-3.432zM40.128 40.504L24.821 31.44v2.002l15.307 8.88v-1.82zM24.821 36.531V34.53l23.07 13.66v1.725l-23.07-13.383zM30.673 41.082l-5.852-3.465v2.003l5.852 3.394v-1.932zM32.337 42.067v1.913l15.555 9.023v-1.726l-15.555-9.21zM40.828 50.183L24.82 40.706v2.002l16.007 9.285v-1.81zM41.849 50.788v1.798l6.043 3.505v-1.726l-6.043-3.577zM47.889 24.344c-3.192-1.647-6.83-.18-8.197 3.334a7.845 7.845 0 00-.496 3.454L3.457 10.399a6.524 6.524 0 01-1.479-3.695 6.244 6.244 0 01.393-2.76C2.789 2.875 3.466 2.047 4.29 1.5l.474-.28c1.254-.634 2.76-.66 4.16.06.04.022 38.965 23.065 38.965 23.065z"
          fill="#E5E3E4"
        />
        <Path d="M.379 17.86l59.789 78.358L.41 62.062.38 17.86z" fill="#F5C300" />
        <Path d="M60.165 48.018v48.204L.405 62.07l59.752-14.058h.004l.004.005z" fill="#ED9F19" />
        <Path
          d="M48.292 66.28c-3.935-1.277-7.304 1.32-7.526 5.807-.221 4.484 2.788 9.157 6.72 10.434 3.935 1.28 7.303-1.318 7.524-5.804.222-4.484-2.787-9.157-6.718-10.437z"
          fill="#023248"
        />
        <Path
          d="M49.261 71.436l-.023 7.958-1.872-1.046.016-5.213a3.735 3.735 0 01-.88.368c-.285.074-.64.118-1.067.13l.005-1.782c.63-.032 1.12-.157 1.47-.378.35-.22.623-.544.821-.97l1.53.933z"
          fill="#fff"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={44.363}
            y1={84.105}
            x2={70.478}
            y2={41.548}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset={0.127} stopColor="#A1A1BD" />
            <Stop offset={0.888} stopColor="#fff" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  )
}

export default OtpSVG
