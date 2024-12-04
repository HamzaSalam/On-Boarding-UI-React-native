import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OnBoarding from '../screens/OnBoarding';
import {getItem} from '../utils/asyncStorage';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [shownOnboarding, setShownOnboarding] = useState(null);

  useEffect(() => {
    checkIfAlreadyOnBoarding();
  }, []);

  const checkIfAlreadyOnBoarding = async () => {
    let onboarding = await getItem('onboarding');
    console.log('onboarding', onboarding);

    if (onboarding == 1) {
      // hide onboarding
      setShownOnboarding(false);
      console.log('false');
    } else {
      // show onboarding
      setShownOnboarding(true);
      console.log('true');
    }
  };

  if (shownOnboarding == null) {
    return null;
  }

  if (shownOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoarding">
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default AppNavigation;
