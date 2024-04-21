import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MonitorScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Environmental Impact Monitor</Text>
      <Text style={styles.metric}>Pollution Level: Moderate</Text>
      <Text style={styles.metric}>CO2 Emissions: 400 ppm</Text>
      <Text style={styles.metric}>Methane Emissions: 2.3 ppm</Text>
      <Text style={styles.metric}>Tree Coverage: 40% of land area</Text>
      <Text style={styles.metric}>Daily Impact on Environment: Low</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  metric: {
    fontSize: 18,
    marginTop: 10,
  }
});

export default MonitorScreen;


