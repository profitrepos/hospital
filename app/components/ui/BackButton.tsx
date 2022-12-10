import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'
import { spacing } from '../../theme'
import { ArrowSVG } from '../svg'

interface BackButtonProps {
    onPress?: () => void,
    wrapperStyle?: ViewStyle,
    btnStyle?: ViewStyle 
}

export const BackButton: FC<BackButtonProps> = ({ onPress, wrapperStyle, btnStyle }) => {

    const navigation = useNavigation()

    const goBack = () => {
        if (onPress) {
          onPress();
        } else {
          navigation.goBack();
        }
      };

    return <TouchableOpacity
    activeOpacity={0.6}
    onPress={goBack}
    style={[$wrapper, wrapperStyle]}
  >
    <View style={[$btn, btnStyle]}>
      <ArrowSVG width={10} height={14} />
    </View>
  </TouchableOpacity>

}


const $wrapper: ViewStyle = {
    paddingVertical: spacing.extraSmall,
}
const $btn: ViewStyle = {
    width: spacing.extraLarge,
    height: spacing.extraLarge,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
}