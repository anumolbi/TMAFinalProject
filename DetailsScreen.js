import React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  // Simulated data fetching state
  const [data, setData] = React.useState({
    temperature: '23°C',
    humidity: '55%',
    pollutionLevel: 'Moderate',
    loading: false
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      {data.loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.detailsText}>Temperature: {data.temperature}</Text>
          <Text style={styles.detailsText}>Humidity: {data.humidity}</Text>
          <Text style={styles.detailsText}>Pollution Level: {data.pollutionLevel}</Text>
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default DetailsScreen;



