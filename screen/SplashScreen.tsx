import React, { useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';
import { images } from './assets';
import { useNavigation } from '@react-navigation/native';

function SplashScreen() {
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LandingPage")
    }, 3000);
  }, [])

  return (
    <View style={styles.sectionContainer}>
      <Image source={images.business} style={{  resizeMode: "contain", }}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    backgroundColor: "white"
  },
});

export default SplashScreen;
