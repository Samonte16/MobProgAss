import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function Password() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/login.png')} // Ensure this path is correct
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>

        <TextInput 
          placeholder="Password" 
          style={styles.input} 
          placeholderTextColor="black" 
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            placeholderTextColor="black"
            secureTextEntry={!showPassword} 
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
            <Ionicons 
              name={showPassword ? 'eye-off' : 'eye'}  
              size={24} 
              color="black" 
            />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.back('index')}  
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',  // Transparent green background (50% opacity)
    borderRadius: 10,
    marginHorizontal: 20,
    paddingBottom: 30,
    width: '90%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for inputs
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10, 
    top: 15,
  },
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    backgroundColor: '#fff',  
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',  
  },
  registerLink: {
    marginTop: 10,
  },
  registerText: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});
