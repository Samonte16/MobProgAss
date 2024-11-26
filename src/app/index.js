import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/login.png')} // Ensure this path is correct
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        <TextInput 
          placeholder="Email or Phone" 
          style={styles.input} 
          placeholderTextColor="black" 
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
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
          style={styles.forgotPasswordLink}
          onPress={() => router.navigate('forgotpass')}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate('Dashboard')}  
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerLink}
          onPress={() => router.navigate('register')}
        >
          <Text style={styles.registerText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    color: 'white',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    backgroundColor: 'white', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',  
  },
  registerLink: {
    marginTop: 10,
    color: 'white',
  },
  registerText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
});
