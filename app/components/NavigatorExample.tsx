
import React, { useCallback, useMemo, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import BottomSheet from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { AuthScreen, MyPatientsScreen, OtpScreen, PatientsAssignmentsScreen, PatientsDataScreen, PatientsJournalScreen, PatientsRecordsScreen, SettingsScreen } from '../screens';
import { Button } from './ui';

const Stack = createStackNavigator();
const ScreenA = SettingsScreen
const ScreenB = AuthScreen

const ScreenC = OtpScreen

const ScreenD = MyPatientsScreen

const Navigator = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,

      headerShown: true,
      safeAreaInsets: { top: 0 },
      cardStyle: {
        backgroundColor: 'white',
        overflow: 'visible',
      },
    }),
    []
  );

  const screenAOptions = useMemo(() => ({ headerLeft: () => null }), []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="FlatList Screen"
          options={screenAOptions}
          component={ScreenA}
        />
        <Stack.Screen name="ScrollView Screen" component={ScreenB} />
        <Stack.Screen name="SectionList Screen" component={ScreenC} />
        <Stack.Screen name="View Screen" component={ScreenD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NavigatorExample = () => {
  // hooks
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // callbacks
  const handleSheetChange = useCallback(index => {
    // eslint-disable-next-line no-console
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <Button text="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button text="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button text="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button text="Expand" onPress={() => handleExpandPress()} />
      <Button text="Collapse" onPress={() => handleCollapsePress()} />
      <Button text="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        animateOnMount={true}
        onChange={handleSheetChange}
      >
        <Navigator />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default NavigatorExample;
