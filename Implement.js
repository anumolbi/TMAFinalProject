import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ImplementScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Implementation Options</Text>
      <Button
        title="Track Your Carbon Footprint"
        onPress={() => navigation.navigate('CarbonFootprint')}
      />
      
      <Button
        title="Reduce Consumption"
        onPress={() => navigation.navigate('ReduceConsumption')}
      />
      <Button
        title="Reduce Waste"
        onPress={() => navigation.navigate('ReduceWaste')}
      />
      <Button
        title="Plant Trees"
        onPress={() => navigation.navigate('PlantTrees')}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default ImplementScreen;
