import React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { SVGPropsType } from "../../interfaces"

const FlagSVG: React.FC<SVGPropsType> = ({ width, height, style }) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 24 17" fill="none">
        <Path
          d="M24 12.5c0 2.278-1.265 4.125-3.75 4.125H3.75C1.265 16.625 0 14.778 0 12.5V4.25C0 1.972 1.265.125 3.75.125h16.5C22.735.125 24 1.972 24 4.25v8.25z"
          fill="#1B75BB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.34 4.972c-.206-.428-.411-.856-.619-1.285a.463.463 0 01-.058-.23.23.23 0 01.163-.215c.103-.038.19-.005.259.074.07.083.07.177.024.27-.04.077-.107.093-.187.074-.052-.013-.076-.049-.075-.102 0-.034.014-.06.053-.063.061-.003.057.05.07.087.001.003.013.001.02.003.032-.017.022-.063.042-.076.114-.083-.043-.121-.029-.186 0-.006-.031-.02-.035-.002-.011.053-.052.032-.082.04-.104.022-.156.092-.147.2.012.138.086.206.262.239.012.037-.069.063-.01.105.05.038-.022.086.012.123.023.027.098-.07.087.039-.016.183.06.287.258.336-.109-.13-.126-.271-.113-.42.008-.108.034-.212.062-.317.048-.178.053-.35-.106-.484.145-.113.145-.113-.01-.204.155-.147.18-.261.118-.512-.024-.097-.052-.193-.064-.292-.017-.151.037-.284.112-.421-.19.037-.267.13-.271.302 0 .024.024.076-.028.067-.07-.015-.048.02-.042.054.004.022.031.057.017.06-.142.028.004.085-.017.127-.113-.01-.195.043-.254.14-.007.056-.027.111-.002.169.025.06.061.106.133.11.036.001.09-.029.085.048 0 .004.01.012.013.011.066-.015.034-.115.112-.13.021-.002-.009-.04-.028-.042-.065-.012-.01-.102-.078-.11-.023.009-.013.032-.018.048-.014.046-.043.067-.086.04-.042-.024-.039-.063-.017-.1.044-.076.176-.076.24 0 .054.068.058.203.007.27-.062.082-.223.119-.33.073-.093-.041-.128-.12-.112-.216a.358.358 0 01.059-.172c.056-.142.113-.283.168-.425.033-.086.047-.174-.031-.244-.08-.071-.174-.075-.267-.028-.042.022-.074.024-.116.002-.093-.049-.187-.047-.268.024-.085.074-.066.165-.032.254.05.132.104.263.158.393.03.033.035.075.048.114.032.101.042.199-.051.274-.073.058-.23.056-.317 0-.111-.073-.123-.261-.022-.342a.165.165 0 01.108-.034c.057.002.105.024.117.088.008.04-.006.073-.048.077-.074.008-.064-.06-.076-.106h-.002c-.062.038-.029.146-.124.14.009.04.046.037.06.055.03.04.013.088.113.043.185-.084.227-.11.169-.308a.265.265 0 00-.24-.117c-.027-.042.12-.085-.01-.118.058-.091-.066-.124-.062-.202.008-.148-.094-.255-.275-.289.144.21.14.425.072.645-.012.041-.025.082-.032.123-.03.172-.034.338.133.455-.154.092-.154.092-.016.208-.135.146-.16.238-.112.442.06.258.15.517-.036.778.169-.052.242-.138.26-.258.004-.04-.078-.162.074-.115.001 0 .012-.016.01-.019-.051-.07.044-.144-.007-.213a.255.255 0 01.024-.007c.15-.024.227-.095.238-.221.012-.127-.014-.156-.192-.213-.007-.002-.017-.002-.022-.008-.012-.018-.034-.066-.047-.022-.016.055-.089.12-.074.13.053.031.041.105.101.133.019-.044.016-.105.083-.096.04.006.045.04.044.07 0 .06-.034.09-.093.098-.077.011-.137-.01-.17-.084-.042-.096-.04-.188.033-.27.07-.078.159-.106.26-.066.098.04.154.112.154.222a.478.478 0 01-.05.21 72.69 72.69 0 00-.455.943c-.077.163-.169.32-.226.491-.094.289.006.493.279.58l.027-.002c.053.024.107.006.161.012a.35.35 0 00.329-.12c.04-.048.072-.037.112.003.08.082.17.14.294.108a.282.282 0 00.215-.002c.225-.052.325-.18.322-.407 0-.11-.036-.21-.082-.309zm-.282.548a.238.238 0 01-.26-.101c-.032-.054-.04-.11.005-.16.037-.041.085-.031.126-.007.049.03.03.083.038.132.049-.005.084-.04.084-.077-.001-.09.13-.072.118-.146-.01-.055-.117-.05-.113-.139.001-.035-.037-.064-.086-.073.008.244-.225.09-.298.204a.857.857 0 01-.031-.014c0-.122-.005-.244 0-.365.004-.082.08-.12.185-.1.02.005.041.035.06.01.018-.025-.002-.05-.014-.074-.047-.091-.136-.105-.247-.123.068-.057.07-.122.058-.19a.371.371 0 00-.09-.17c-.03-.034-.056-.045-.096-.009a.284.284 0 00-.049.371c-.13.014-.23.052-.265.19.038-.003.07-.006.103-.007.122-.002.151.027.151.147v.335a.431.431 0 00-.197-.058c-.093-.003-.151-.035-.114-.15-.07.014-.1.049-.111.101-.002.01-.004.023-.002.034.005.056-.216.04-.05.138.071.043.045.153.141.163.02-.013.007-.033.008-.05.009-.079.058-.111.128-.093.07.018.079.076.061.14-.027.095-.134.16-.246.147a.246.246 0 01-.223-.213.404.404 0 01.042-.212l.655-1.395c.042.016.046.055.06.084l.594 1.258a.546.546 0 01.065.243c-.002.112-.075.2-.19.229z"
          fill="#FDC40C"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.102 10.947h-.214c-.007-.004-.01-.008-.007-.012.002-.005.004-.007.007-.007h.214a.032.032 0 000 .019z"
          fill="#CDC030"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.72 8.928a.459.459 0 01-.057-.231.227.227 0 01.165-.213c.101-.034.191-.005.258.078.069.084.069.177.02.269-.034.065-.092.09-.164.077-.054-.01-.093-.038-.095-.1-.001-.033.008-.064.045-.07.071-.013.063.056.083.096.067-.027.04-.123.123-.135-.075-.025-.06-.106-.108-.144-.041.054-.11.04-.163.068-.079.043-.097.114-.085.196.019.132.086.19.262.226-.05.073.048.15-.038.244.11-.044.137-.035.12.062-.025.138.103.272.24.273-.15-.22-.099-.45-.039-.679.052-.194.072-.375-.098-.525.146-.098.146-.099 0-.208.164-.139.153-.313.104-.497-.063-.237-.12-.476.035-.71-.155.027-.27.15-.242.28.024.11-.029.093-.114.081.111.076-.038.16.04.23l-.029.007c-.154.02-.233.093-.243.228-.01.134.06.199.191.205.007 0 .015.002.02.007.017.01.014.07.05.028.034-.04.054-.095.08-.144-.069-.012-.04-.106-.112-.126-.008.043-.006.1-.067.099-.038 0-.054-.028-.055-.062-.002-.06.03-.093.085-.106.072-.019.132.001.169.065.054.09.056.184-.008.27-.064.085-.15.12-.255.09-.1-.031-.164-.098-.175-.207a.449.449 0 01.057-.242c.2-.411.397-.823.596-1.234.034-.073.07-.145.09-.225.067-.276-.038-.496-.293-.543-.004-.001-.007-.012-.011-.017-.06-.051-.135-.021-.202-.037-.106.042-.223.062-.3.156-.049.058-.083.046-.128-.005a.393.393 0 00-.308-.127c-.057.002-.114-.027-.173-.01a.058.058 0 00-.027.023c-.01.034-.044.026-.067.037a.371.371 0 00-.242.39.84.84 0 00.096.329l.61 1.265a.48.48 0 01.055.233.234.234 0 01-.212.221.235.235 0 01-.25-.161c-.024-.086-.016-.17.05-.237.049-.048.11-.051.172-.026.046.02.06.058.056.103-.002.028-.013.054-.047.057-.052.005-.06-.037-.072-.073-.003-.012-.01-.02-.033-.012-.026.038-.027.103-.078.116.043.173.15.133.255.081.082-.04.091-.118.082-.2-.015-.125-.085-.182-.265-.22.062-.067-.042-.145.01-.214.003-.004-.005-.021-.022-.014-.106.043-.067-.036-.066-.081.004-.156-.113-.28-.248-.266a.453.453 0 01.104.307c-.001.149-.038.29-.073.43-.044.174-.036.336.114.461-.038.039-.106.046-.107.104-.002.06.076.063.105.109-.141.112-.151.261-.121.42.013.068.038.133.05.201.038.2.074.402-.078.58a.265.265 0 00.255-.237c.006-.048-.06-.152.077-.125.003 0 .012-.015.01-.017-.055-.07.061-.142-.015-.209l.03-.007c.15-.022.228-.091.24-.218.012-.127-.015-.158-.19-.216-.007-.002-.016-.003-.02-.008-.016-.014-.03-.07-.048-.024-.022.052-.067.088-.077.145.068.009.04.094.093.117.034-.03.023-.112.098-.09.04.012.041.05.036.086-.011.069-.066.082-.12.086a.134.134 0 01-.128-.066c-.053-.09-.06-.183.002-.271.061-.087.149-.124.252-.095.101.028.17.091.178.201a.452.452 0 01-.052.245c-.198.407-.395.815-.59 1.224-.035.072-.071.145-.094.222-.082.28.026.487.285.556.009.01.019.018.03.024.055.015.112.006.168.008.16.002.282-.07.379-.2.098.133.219.203.375.2.063-.006.13.018.185-.032.205-.037.318-.168.323-.37a.733.733 0 00-.085-.343l-.62-1.287h.002zm-.854-2.656c-.103-.23.023-.423.245-.4a.213.213 0 01.176.114c.03.054.037.117-.018.155-.053.037-.11.029-.147-.035-.014-.03.008-.068-.017-.098-.1.03-.082.173-.19.197-.021.004-.014.038.004.044.072.025.092.085.118.147.017.04.063.056.073-.008.012-.071.057-.086.115-.089a.403.403 0 00.21-.062v.314c.002.147-.018.17-.16.172l-.093.005c.043.124.133.168.261.172-.101.142-.044.258.046.368.027.034.054.046.095.008a.287.287 0 00.05-.374c.123-.008.226-.045.259-.186-.036.003-.065.007-.094.007-.123.005-.16-.031-.16-.152 0-.103 0-.207.015-.32.086.103.314-.051.311.193.048-.004.083-.031.09-.074.01-.055.034-.086.084-.106.02-.007.05-.04.028-.049-.097-.04-.107-.16-.198-.215-.004.024-.008.034-.007.044 0 .048-.002.094-.06.109-.04.01-.078.014-.106-.021-.036-.043-.033-.095-.009-.142a.22.22 0 01.242-.117c.106.015.188.067.211.181a.335.335 0 01-.025.215c-.217.465-.436.93-.655 1.396-.004.01-.016.015-.03.027-.223-.474-.45-.945-.664-1.42zm.437 2.049c.092-.048.176-.09.236-.182.065.09.14.138.24.179a.494.494 0 00-.214.146c-.026.036-.043.01-.06-.01a.477.477 0 00-.202-.133zm.75 2.44c-.107.022-.2-.006-.26-.104-.032-.053-.037-.111.009-.159.034-.035.08-.026.119-.008.056.028.033.087.045.135.051-.006.072-.041.087-.082.008-.024.008-.054.037-.066.109-.044.11-.088-.001-.129-.037-.013-.02-.045-.027-.069-.016-.047-.045-.077-.103-.094.024.123-.04.156-.14.156a.303.303 0 00-.18.064c0-.144-.003-.27 0-.394.002-.068.052-.091.11-.097.044-.005.09-.001.14-.001-.026-.136-.132-.17-.253-.179.074-.136.057-.253-.043-.363-.04-.046-.07-.043-.111.001-.094.103-.113.225-.047.362-.1.008-.19.033-.237.133-.022.047-.02.051.03.049.2-.007.21.004.205.203-.001.08-.003.162-.006.242 0 .007-.004.015-.008.03a.378.378 0 00-.196-.055c-.057-.004-.101-.02-.113-.089-.012-.066-.059-.047-.075-.008-.024.063-.046.121-.117.147-.02.007-.024.04-.004.045.11.022.09.167.19.196.024-.03.003-.067.017-.098.036-.063.094-.072.146-.035.056.038.048.1.02.156-.042.085-.15.132-.257.112a.24.24 0 01-.2-.22.398.398 0 01.042-.201l.656-1.397c.041.023.048.064.063.097l.591 1.25a.545.545 0 01.064.242.231.231 0 01-.193.228z"
          fill="#FDC40C"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.183 5.692v.014c-.064 0-.131.021-.192-.019l.192.005z"
          fill="#D2C02C"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.183 10.93v.014c-.064 0-.131.023-.192-.019.064.003.129.004.192.005z"
          fill="#D3C02B"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.107 6.008c.047.025.006.066.016.098-.03-.028-.015-.064-.016-.098zM3.123 10.53v.099c0 .002-.005.005-.007.005-.003 0-.006-.004-.01-.006.002-.033-.014-.07.017-.098z"
          fill="#83BA67"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.829 7.588a1.896 1.896 0 011.91-1.894 1.895 1.895 0 011.886 1.894 1.901 1.901 0 01-1.899 1.895 1.902 1.902 0 01-1.896-1.897M11.95 11.428a2.834 2.834 0 01-.733-.221c-.164-.071-.33-.138-.498-.21.045-.051.118-.033.172-.085-.141-.046-.294-.035-.416-.13.059-.055.146-.035.203-.091-.133-.051-.281-.02-.41-.114.107-.043.217-.025.313-.09-.181-.084-.41-.021-.566-.207h.417c.002-.006.003-.012.006-.017-.067-.031-.133-.063-.2-.093a1.62 1.62 0 01-.49-.308c-.046-.045-.12-.101-.075-.162.029-.039.102.021.153.048.085.048.164.109.272.106.012-.051-.03-.058-.053-.077-.25-.21-.49-.431-.675-.705-.025-.038-.07-.08-.016-.123.052-.039.102-.019.147.024.13.13.252.268.395.383a.323.323 0 00.147.076 2.8 2.8 0 00-.078-.096 3.808 3.808 0 01-.505-.732c-.03-.058-.087-.13-.002-.181.081-.052.147-.003.196.064.113.153.223.31.336.464a.283.283 0 00.117.106c-.083-.194-.176-.36-.234-.538a1.43 1.43 0 01-.083-.43.653.653 0 01.007-.122c.01-.05.033-.087.093-.091.06-.003.071.035.083.081.05.184.1.368.152.55.028.102.067.199.136.309-.009-.162-.055-.296-.05-.435.004-.054.004-.11.01-.164a.076.076 0 01.075-.07c.04-.003.065.022.075.064.027.106.05.214.085.318.453 1.312 1.372 2.078 2.73 2.324.15.028.305.034.457.053.008.019-.003.035-.011.05-.03.062-.046.145-.097.18-.062.047-.114-.042-.174-.066-.2-.078-.41-.073-.619-.082a.846.846 0 01-.61-.26 3.882 3.882 0 00-.173-.168.748.748 0 00-.327-.195c-.234-.061-.405-.214-.556-.394-.16-.192-.294-.403-.481-.572a2.349 2.349 0 00-.135-.113c-.04-.031-.079-.073-.114.011-.024.06-.06 0-.09-.002s-.06-.015-.085.01c-.03.033.012.05.025.072.042.067.085.135.114.212.027.077.033.13-.076.114-.024-.003-.048.003-.085.004.067.123.168.202.263.294-.044.03-.1 0-.144.042.074.073.16.13.256.17.018.007.034.016.053.018.115.011.011.116.067.156.036.026.147.019.057.116-.026.027-.012.07.033.086.027.01.056.02.084.027.07.02.118.04.026.102-.049.031-.029.055.013.076.09.05.19.074.31.099l-.17.113c.313.184.647.29.978.397.003.023.001.034-.024.024zM13.511 12.334c-.063.011-.095.049-.136.072-.053.031-.104.07-.168.076-.03.004-.071.022-.09-.012-.013-.026.01-.055.027-.08.09-.142.235-.19.39-.216.196-.032.396-.022.592-.024.162-.002.325-.002.478-.057.096-.035.228-.04.216-.199 0-.022.024-.024.04-.031.023-.01.06-.02.064-.037.034-.138.148-.107.239-.109.3-.005.598.056.899.066.064.002.059.042.048.084-.033.138-.224.21-.36.134-.03-.015-.054-.036-.091-.061l-.026.142c-.022.113-.09.146-.19.095-.138-.07-.14-.07-.208.06-.02.04-.041.084-.09.088-.065.006-.076-.055-.11-.112-.034.045-.062.086-.094.123-.06.066-.122.11-.199.018-.043-.053-.07-.035-.108.016-.09.123-.144.119-.213-.01-.028-.052-.049-.05-.07.002-.02.044-.04.086-.084.113-.038.025-.08.04-.124.023-.052-.023-.028-.069-.027-.107 0-.023.019-.05-.014-.077-.056.036-.093.095-.141.142-.038.035-.082.079-.135.055-.051-.022-.017-.077-.018-.119-.002-.024.006-.05-.018-.081-.044.048-.084.098-.129.143-.033.034-.075.073-.124.053-.05-.021-.025-.077-.026-.12v-.053z"
          fill="#FDC40C"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.659 5.523c.183.093.366.184.526.31.09.071.09.162.012.235-.076.073-.162.066-.233-.027-.122-.16-.21-.34-.305-.518z"
          fill="#FCC40D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.872 7.003c.189-.008.378-.018.566-.022.07 0 .14.018.169.098a.164.164 0 01-.036.173c-.056.06-.127.046-.194.02a2.225 2.225 0 01-.505-.27z"
          fill="#FBC40D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.78 5.53c-.08.185-.181.36-.302.522-.067.086-.153.086-.227.013-.072-.073-.072-.159.011-.227.156-.128.338-.216.518-.308zM14.291 4.732c.035.202.05.4.038.6-.006.106-.082.163-.179.144-.104-.019-.154-.097-.119-.204.064-.19.163-.362.26-.54zM13.159 4.74c.107.18.21.359.267.56.024.093-.037.163-.133.177-.098.015-.167-.042-.172-.152a2.646 2.646 0 01.038-.585zM12.607 4.918c.147.148.29.3.39.481.046.084.004.167-.087.204-.09.036-.17-.003-.202-.108a2.705 2.705 0 01-.1-.577zM11.303 5.97c.197.053.393.106.575.201.094.05.11.137.053.223-.057.083-.143.1-.225.028a2.964 2.964 0 01-.403-.453zM16.181 5.952c-.148.175-.273.327-.42.46-.09.082-.182.069-.242-.024-.056-.089-.034-.172.072-.224.179-.088.369-.147.59-.212zM13.726 4.633c.064.22.126.414.15.617.014.116-.044.184-.148.184-.105.001-.165-.067-.151-.18.025-.204.088-.398.149-.621zM14.86 4.888c-.03.19-.055.383-.091.572-.026.136-.112.182-.22.133-.101-.044-.125-.127-.06-.236a2.6 2.6 0 01.371-.47z"
          fill="#FCC40D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.035 6.477c.204.003.408.03.605.083.1.027.13.107.096.2-.038.097-.117.133-.211.082-.18-.099-.333-.233-.49-.365zM16.419 6.476a2.99 2.99 0 01-.49.366c-.094.051-.174.015-.212-.084-.036-.091-.004-.17.096-.198.198-.052.401-.08.606-.084zM16.586 7.03c-.169.09-.34.177-.521.247-.064.023-.133.032-.184-.026a.165.165 0 01-.037-.173c.027-.075.092-.097.159-.096.192.003.384.013.576.02.005.01.005.018.007.027zM16.646 7.587c-.196.068-.394.13-.6.155-.097.012-.162-.054-.164-.15-.003-.097.055-.16.155-.154.21.013.406.09.61.149z"
          fill="#FBC40D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.109 10.03c.042-.195.104-.386.186-.568.054-.114.138-.14.23-.082.096.058.103.15.02.249-.03.034-.061.065-.094.094-.113.104-.227.205-.342.307zM11.269 9.23c.144-.175.274-.32.412-.455.05-.05.11-.08.18-.052.061.027.098.081.1.146.006.083-.05.127-.116.155-.178.078-.363.136-.576.206zM16.162 9.204a2.738 2.738 0 01-.566-.183c-.118-.056-.142-.16-.066-.25.06-.075.147-.078.23-.003.056.048.105.102.154.157.084.092.165.186.248.279zM16.427 8.707a4.05 4.05 0 01-.578-.077c-.07-.016-.128-.046-.143-.12a.164.164 0 01.065-.166c.064-.05.133-.029.193.01.165.103.314.225.463.353zM15.787 9.65c-.177-.09-.35-.177-.505-.294-.1-.075-.11-.163-.033-.242.063-.065.153-.072.211-.004.14.16.23.352.327.54z"
          fill="#FCC40D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.81 7.575c.171-.045.344-.091.518-.13.146-.032.224.01.24.115.018.11-.05.196-.16.182a2.281 2.281 0 01-.599-.167z"
          fill="#FBC40D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.37 10.045a5.463 5.463 0 01-.458-.413c-.047-.05-.08-.108-.049-.178a.164.164 0 01.145-.103c.078-.005.12.047.15.108.083.182.142.374.211.586zM11.678 9.639c.08-.18.172-.346.284-.497.073-.098.169-.105.242-.03.063.065.077.143.01.204-.156.143-.348.23-.537.323zM13.17 10.458a2.66 2.66 0 01-.048-.587c.005-.117.057-.172.156-.168.117.004.178.085.145.203a.848.848 0 01-.057.14c-.064.137-.132.274-.196.412zM14.302 10.485c-.102-.202-.193-.373-.262-.554-.024-.065-.033-.13.022-.183a.164.164 0 01.183-.037c.07.027.087.094.088.164.004.193-.01.385-.03.61zM11.027 8.708c.147-.128.294-.248.455-.35.061-.039.126-.064.194-.019a.16.16 0 01.072.163c-.012.084-.079.114-.157.131-.185.04-.373.058-.564.075zM12.094 5.178l.008-.005c.194.113.36.263.483.448.051.074-.004.147-.08.188-.086.045-.151.014-.195-.063-.07-.125-.107-.263-.157-.397-.02-.057-.039-.114-.06-.17zM15.338 5.175c-.048.2-.104.397-.2.576-.046.089-.132.1-.214.044-.083-.057-.1-.144-.03-.227a2.72 2.72 0 01.444-.393zM12.61 10.211a3.73 3.73 0 01.075-.498c.029-.127.11-.174.215-.132.103.039.132.133.062.243-.103.163-.219.318-.347.463-.017-.024-.013-.05-.005-.076zM16.616 8.162a3.566 3.566 0 01-.624.03c-.117-.006-.172-.078-.15-.18.02-.106.094-.151.203-.116.192.063.37.161.571.266zM10.837 8.164c.2-.106.372-.196.555-.263.068-.026.132-.03.18.029a.16.16 0 01.033.173c-.029.074-.09.09-.16.09a4.707 4.707 0 01-.608-.03zM14.838 10.287a4.161 4.161 0 01-.341-.454c-.04-.059-.066-.126-.02-.193a.165.165 0 01.173-.07c.082.018.108.085.12.154.027.162.05.325.073.487.009.026.012.052-.005.076zM13.727 10.543c-.063-.218-.118-.404-.148-.597-.012-.066-.01-.134.056-.176a.17.17 0 01.177-.004c.074.04.073.114.062.184-.03.193-.087.379-.147.593z"
          fill="#FCC40D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.487 12.024c.06-.018.125.008.184-.022.127.004.258-.017.384.027-.19.016-.38.014-.568-.005z"
          fill="#E1C221"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.404 9.77c.257-.21.495-.436.681-.714.022-.033.055-.067.01-.104-.038-.033-.083-.028-.124-.004-.02.013-.036.035-.054.054-.11.108-.218.218-.331.322a.7.7 0 01-.234.153c.04-.043.055-.063.073-.081.22-.242.41-.509.566-.796.032-.058.073-.127-.001-.176-.073-.049-.14-.01-.193.051-.014.017-.025.037-.039.054-.112.148-.204.314-.33.453-.023.027-.04.07-.092.066.052-.108.104-.211.151-.315.1-.227.177-.46.17-.71-.004-.068-.011-.143-.1-.147-.082-.003-.08.068-.099.123-.078.256-.11.524-.242.762-.025.009-.032-.001-.025-.024.017-.167.07-.331.031-.503-.01-.048-.025-.087-.08-.085-.049.003-.07.035-.082.086-.302 1.376-1.4 2.42-2.786 2.609-.308.042-.535.145-.717.39-.128.17-.301.287-.507.352-.097.033-.197.058-.284.116-.06.04-.114.082-.11.164-.083.036-.145.086-.15.184 0 .022.002.067.03.055.055-.024.113-.01.157-.02.264-.052.53-.044.793-.06.062 0 .128.035.183-.023-.116-.018-.231-.05-.351-.025-.027.006-.066.006-.08-.023-.012-.028.022-.042.033-.064.014-.026.078-.052-.003-.079-.018-.006.01-.026.022-.039.018-.019.053-.024.055-.068-.106.02-.209.038-.312.055-.016.008-.043.012-.046.024-.018.048-.017.114-.078.119a.387.387 0 01-.204-.036c.05.01.085-.033.129-.045.036.01.049-.022.069-.04.042-.017.08-.049.13-.046a3.4 3.4 0 00.703-.486.576.576 0 01.263-.13c.273-.072.557-.087.835-.134.103-.018.193-.047.262-.137a.952.952 0 01.319-.251c.22-.115.442-.227.665-.337a.235.235 0 00.118-.108 1.51 1.51 0 01.544-.593.603.603 0 01.308-.104c.076-.003.105.018.08.1-.03.105-.097.187-.164.285l.098-.025c.04-.009.094-.048.121-.007.03.046-.01.098-.043.137-.045.055-.095.105-.143.157.033.037.097.006.126.061-.125.096-.275.153-.392.257.01.03.056.018.06.063-.056.025-.11.058-.167.077-.082.026-.073.09-.08.153-.002.012-.028.022-.045.03-.037.015-.076.027-.113.043-.03.013-.07.028-.035.07.056.063-.002.073-.04.087-.04.015-.087.021-.132.03.013.066.043.126-.027.174-.2.14-.409.259-.652.305.006.052.04.024.065.022.344.006.646-.117.928-.297.015-.009.036-.016.036-.038 0-.026-.024-.023-.04-.031-.05-.026-.113-.029-.157-.083.161-.105.358-.058.528-.133-.082-.066-.183-.01-.26-.073.168-.057.35-.052.51-.16-.102-.054-.203 0-.291-.055.061-.035.122-.047.183-.062.104-.03.211-.059.306-.117.022-.012.051-.025.044-.055-.007-.036-.04-.024-.064-.025-.04 0-.08.004-.12.004-.02 0-.048.008-.057-.02-.008-.028.02-.035.038-.045.105-.067.21-.132.315-.2a.9.9 0 00.257-.222c.036-.047.095-.11.048-.163-.039-.045-.098.018-.143.04-.044.021-.082.052-.123.073-.053.025-.107.051-.166.028-.001-.007-.003-.012-.001-.014l.066-.055z"
          fill="#FBC40E"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.503 11.45l.065.022a.12.12 0 01-.085.008c-.011-.003-.033-.005-.02-.024.004-.008.025-.005.04-.006z"
          fill="#FDC40C"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.904 11.78c-.008.027.014.062-.017.079-.032.015-.043-.014-.052-.037a.093.093 0 01.069-.042z"
          fill="#FBC40E"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.321 11.705a1.09 1.09 0 00.09-.236c.062-.271-.052-.464-.31-.522-.06-.02-.124-.005-.187-.01-.162-.02-.284.053-.38.183-.097-.13-.207-.211-.368-.182-.058-.007-.118.014-.175-.012l-.028.002c-.01.032-.042.03-.065.04a.37.37 0 00-.243.389.83.83 0 00.096.329c.205.424.408.85.614 1.275a.456.456 0 01.05.222c-.004.116-.088.205-.209.225a.241.241 0 01-.212-.39c.04-.05.096-.055.157-.043.054.011.08.044.08.096.002.03-.003.065-.044.07-.06.008-.063-.042-.077-.081-.002-.005-.012-.005-.02-.008-.028.015-.02.057-.034.066-.117.078.03.127.019.193-.001.008.032.021.036.005.015-.059.062-.032.094-.04.083-.024.132-.074.135-.164.007-.155-.073-.24-.262-.273.048-.07-.044-.145.005-.216.004-.005-.006-.022-.022-.015-.107.04-.066-.04-.065-.084.003-.148-.103-.268-.242-.268.07.106.107.22.097.348-.01.119-.031.237-.063.351-.05.184-.063.364.104.503-.145.1-.145.111.005.2-.146.152-.179.257-.123.47.068.255.135.506-.045.757.195-.038.283-.144.276-.313-.001-.025-.027-.072.03-.056.068.021.05-.017.042-.05-.005-.022-.013-.043-.02-.064.126-.023.019-.08.014-.127a.266.266 0 00.246-.117.315.315 0 00.022-.158c-.018-.087-.061-.147-.162-.144-.024.001-.057.022-.066-.02-.016-.077-.05-.032-.048-.002.003.066-.062.06-.09.105.057.028.099.072.097.144a.015.015 0 00.007.003c.018-.008.025-.01.026-.013.009-.045.007-.098.075-.091.03.003.048.023.048.055.002.058-.03.093-.086.104-.086.018-.152-.014-.189-.093-.045-.097-.017-.214.062-.27.089-.064.248-.069.326-.007.094.076.083.174.051.274-.013.039-.019.081-.05.113l-.16.406c-.033.086-.044.174.038.243.078.067.168.07.258.027.045-.023.08-.026.127-.002.092.048.187.042.266-.031.077-.072.06-.16.027-.246-.048-.125-.099-.248-.148-.372-.04-.059-.056-.126-.073-.192-.024-.1 0-.184.093-.237.095-.053.265-.026.332.052.068.08.063.17.02.258-.035.07-.101.09-.176.077-.055-.009-.09-.043-.093-.1-.001-.037.023-.059.057-.061.069-.005.054.06.076.102.064-.03.03-.14.126-.136-.015-.02-.022-.036-.028-.036-.078-.001-.071-.141-.097-.109-.039.053-.07.05-.12.056-.08.008-.141.107-.126.203.007.04.025.08.038.12a.303.303 0 00.252.094c-.117.082.03.163-.027.238.006.002.014.008.02.007.101-.032.05.048.053.078.006.156.098.259.273.28-.164-.237-.116-.478-.046-.724.052-.183.054-.364-.123-.496.153-.085.153-.085.018-.206.14-.155.16-.252.099-.489-.063-.241-.12-.482.038-.724a.287.287 0 00-.21.135c-.051.074-.047.157-.026.237-.04.023-.071-.021-.117.014.096.062-.058.14.034.212-.1.014-.185.033-.236.117-.091.149-.018.252.137.333.147.075.097-.093.166-.092l-.098-.157c-.03.045-.022.117-.093.102-.038-.008-.045-.039-.043-.072.004-.067.048-.09.108-.097.063-.007.114.012.146.07.052.09.057.184-.009.27-.06.076-.139.119-.242.09-.107-.03-.174-.096-.186-.209a.423.423 0 01.053-.232l.603-1.254zm-.518 1.86c-.09.039-.175.064-.232.133-.023.027-.04.024-.062-.003-.059-.069-.144-.094-.24-.132a.442.442 0 00.243-.146c.018-.024.035-.028.054-.003.055.078.141.113.237.151zm-.232-.682c-.007.016-.019.031-.035.058l-.628-1.33a.632.632 0 01-.077-.25.226.226 0 01.134-.223.241.241 0 01.272.025.169.169 0 01.07.139c0 .049-.022.092-.076.1-.055.006-.1-.014-.115-.073-.006-.024-.005-.05-.008-.082-.1.04-.086.179-.194.2-.004.002-.005.019-.008.029.117.022.092.173.203.217-.01-.256.233-.091.326-.2 0 .097-.002.194 0 .289.003.164-.026.193-.195.18l-.045-.008c.025.13.048.148.246.198-.099.125-.041.234.035.341.04.058.077.063.126.005.092-.112.108-.22.039-.353.11-.013.213-.04.246-.166-.008-.005-.013-.012-.019-.012-.233-.012-.233-.012-.227-.246.002-.072 0-.145.014-.228.086.103.313-.05.312.192.06-.005.084-.046.098-.097.005-.018.005-.048.015-.051.154-.057.083-.093-.002-.15-.042-.03-.03-.12-.112-.136-.001.028-.001.053-.006.078-.008.058-.052.074-.101.073-.053 0-.081-.035-.086-.089-.008-.088.07-.178.173-.2a.248.248 0 01.299.26.446.446 0 01-.04.167c-.21.449-.422.896-.634 1.343z"
          fill="#FDC40C"
        />
      </Svg>
    </View>
  )
}

export default FlagSVG
