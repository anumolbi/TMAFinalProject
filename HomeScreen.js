HomeScreen.js:
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Echo Tracker Name with Home Symbol */}
      <View style={styles.header}>
        <Ionicons name="home" size={24} color="white" style={styles.homeIcon} />
        <Text style={styles.appName}>ECO TRACKER</Text>
      </View>

      {/* Buttons */}
      <Text style={styles.heading}>Home</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchOptions')}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Monitor')}>
          <Text style={styles.buttonText}>Monitor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Implement')}>
          <Text style={styles.buttonText}>Implement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      {/* Description */}
      <Text style={styles.description}>
        Welcome to Echo Tracker App!{'\n\n'}
        <Text style={styles.descriptionText}>
          Echo Tracker helps you track and monitor various eco-friendly activities and initiatives. 
          It empowers individuals and organizations to make a positive impact on the environment 
          by providing tools to measure, analyze, and implement sustainable practices.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0', // Light background color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#228B22', // Dark text color
    marginLeft: 10,
  },
  homeIcon: {
    marginRight: 10,
  },
  description: {
    textAlign: 'center',
    color: '#34495e', // Dark text color
    marginTop: 20,
  },
  descriptionText: {
    fontStyle: 'italic',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50', // Heading color
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#228B22', // Button background color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
