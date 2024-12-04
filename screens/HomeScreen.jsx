import React from 'react';

import {Text} from '@react-navigation/elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {removeItem} from '../utils/asyncStorage';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem('onboarding');
    navigation.navigate('OnBoarding');
  };

  return (
    <SafeAreaView style={styles.contianer}>
      <View style={styles.lottie}>
        <LottieView
          source={require('../assets/animations/confitte.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    alignItems: 'center',
  },
  lottie: {width: width * 0.9, height: width},
  text: {fontSize: width * 0.09, marginBottom: 20},
  resetButton: {backgroundColor: '#34d399', borderRadius: 10, padding: 10},
});
