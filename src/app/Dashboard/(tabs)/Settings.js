import React from 'react';
import { Image, StyleSheet, View, Text, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Avatar = ({ isDarkMode, toggleSwitch }) => {  
  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("Signed out") }
    ]);
  };
  return (
    <View style={[styles.containers, isDarkMode && styles.darkContainer]}>
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


    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
    <Avatar/>
      <View style={styles.section}>
        <Text style={[styles.header, isDarkMode && styles.darkText]}>Profile</Text>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="person" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Manage Account</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
        </TouchableOpacity>
      </View>

    <View style={styles.section}>
      <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
        <Icon name="shield" size={24} color={isDarkMode ? "white" : "gray"} />
        <Text style={[styles.item, isDarkMode && styles.darkText]}>Security</Text>
        <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
      </TouchableOpacity>
    </View>

    <View style={styles.section}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Settings</Text>
      <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
        <Icon name="notifications" size={24} color={isDarkMode ? "white" : "gray"} />
        <Text style={[styles.item, isDarkMode && styles.darkText]}>Notifications</Text>
        <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
      </TouchableOpacity>
      <View style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
        <Icon name="moon" size={24} color={isDarkMode ? "white" : "gray"} />
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
  </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'pink',  
  },
  darkContainer: {
    backgroundColor: '#37474F',  
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
  },

  container: {
    padding: 30,
    backgroundColor: '#F7F7F7', 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
  },
  darkContainer: {
    backgroundColor: '#1C1C1E', 
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
 
  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
    borderRadius: 10,
    marginVertical: 2,
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
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    color: '#000',
  },
  darkText: {
    color: '#FFFFFF',
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
    backgroundColor: 'pink',  
    borderRadius: 10,
    alignItems: 'center',
  },
  darkSignOutButton: {
    backgroundColor:'#37474F',
  },
  signOutText: {
    fontSize: 18,
    color:'black',
    fontWeight: 'bold',
  },

  darkSignOutText: {
    fontSize: 18,
    color:'white',
    fontWeight: 'bold',
  },
});


export default Avatar;