import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function About() {
  return (
      <ImageBackground
        source={require('../../assets/green.png')}
        style={styles.backgroundImage}
      >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to About Page</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    margin: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "Black",
    textAlign: "center",
    bottom: 350,
  },
});
