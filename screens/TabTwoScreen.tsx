import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Graph from '../components/Graph';
const axios = require("axios");

export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COVID</Text>
      <Graph></Graph>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 0,
    height: 1,
    width: '100%',
  },
});
