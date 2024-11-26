import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

const Register = () => { 
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const handleRegister = () => {
    router.navigate('index');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthDate: '',
      gender: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <ImageBackground
      source={require('../assets/login.png')} // Ensure this path is correct
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <ScrollView>  
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="white"
            value={formData.firstName}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="white"
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="white"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="white"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Birth Date"
            placeholderTextColor="white"
            value={formData.birthDate}
            onChangeText={(text) => setFormData({ ...formData, birthDate: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            placeholderTextColor="white"
            value={formData.gender}
            onChangeText={(text) => setFormData({ ...formData, gender: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="white"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            secureTextEntry
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress= {() => {
              router.back('index');
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                birthDate: '',
                gender: '',
                password: '',
                confirmPassword: ''
              });
          }}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

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
    top: 15,
    width: '90%',
    color: 'black',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', 
    textShadowColor: 'black', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 5, 
  },
  input: {
    height: 50,
    borderColor: 'white', 
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black', 
    width: 280,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Register;
