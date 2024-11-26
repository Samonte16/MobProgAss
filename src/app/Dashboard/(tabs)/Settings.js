import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const SettingsScreen = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => { console.log("Signed out");
        router.push('/')
      }
       },
    ]);
  };

  const Avatar = () => (
    <View style={[styles.avatarContainer, isDarkMode && styles.darkContainer]}>
      <Image
        source={require('../../../assets/profile.png')}
        style={styles.image}
      />
      <View style={styles.joinedContainer}>
        <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Carlos Antonio Samonte</Text>
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, isDarkMode && styles.darkText]}>Joined 8 years ago</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Avatar />

      <View style={styles.section}>
        <Text style={[styles.header, isDarkMode && styles.darkText]}>Profile</Text>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="person" size={24} color={isDarkMode ? "white" : "green"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Manage Account</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "green"} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="shield" size={24} color={isDarkMode ? "white" : "green"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Security</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "green"} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, isDarkMode && styles.darkText]}>Settings</Text>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="notifications" size={24} color={isDarkMode ? "white" : "green"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Notifications</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "green"} />
        </TouchableOpacity>
        <View style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="moon" size={24} color={isDarkMode ? "white" : "green"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81C784" }}
            thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>

      <TouchableOpacity style={[styles.signOutButton, isDarkMode && styles.darkSignOutButton]} onPress={handleSignOut}>
        <Text style={[styles.signOutText, isDarkMode && styles.darkSignOutText]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '115%',
    right: 30,
    flex: 1,
    padding: 30,
    backgroundColor: '#F7F7F7',
    bottom: 30,
  },
  darkContainer: {
    backgroundColor: '#1C1C1E',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'green',
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 100,
    margin: 10,
    borderColor: '#E0E0E0',
    borderWidth: 2,
  },
  joinedContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#263238',
    paddingTop: 15,
    color: 'white',
  },
  darkText: {
    color: '#E0E0E0',
  },
  statusContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  statusText: {
    fontSize: 14,
    color: '#6D6D6D',
    color: 'white',
  },
  section: {
    padding: 15,
  },
  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  lightRow: {
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  darkRow: {
    backgroundColor: '#2C2C2E',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#000',

  },
  item: {
    fontSize: 16,
    color: '#263238',
    flex: 1,
    marginLeft: 10,
  },
  signOutButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  darkSignOutButton: {
    backgroundColor: '#37474F',
  },
  signOutText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  darkSignOutText: {
    color: 'white',
  },
});

export default SettingsScreen;
