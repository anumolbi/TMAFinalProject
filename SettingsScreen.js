import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>
      <Button
        title="Username"
        onPress={() => navigation.navigate('Username')}
      />
      <Button
        title="Password"
        onPress={() => navigation.navigate('Password')}
      />
      <Button
        title="Email"
        onPress={() => navigation.navigate('Email')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default SettingsScreen;
