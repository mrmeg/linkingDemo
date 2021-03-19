import React from 'react';
import {Text, StyleSheet} from 'react-native';

const LandingScreen = () => {
  return (
    <>
      <Text style={styles.text}>Landing Screen</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default LandingScreen;
