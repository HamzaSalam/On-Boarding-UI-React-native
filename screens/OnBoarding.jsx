import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
import {setItem} from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

const OnBoarding = () => {
  const navigation = useNavigation();

  const handleDone = async () => {
    navigation.navigate('Home');
    await setItem('onboarding', '1');
  };

  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity {...props} style={styles.doneButton}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        bottomBarHighlight={false}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/animations/boost.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Boost Productivity',
            subtitle: 'Subscribe this channel to boost your productivity',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/animations/work.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Work Seamlessly',
            subtitle: 'Get Your work done seamlessly without interruption',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/animations/achieve.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Achieve Higher Goals',
            subtitle:
              'By boost your productivity we help to achieve higher goals',
          },
        ]}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {width: width * 0.9, height: width},
  doneButton: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%',
  },
});
