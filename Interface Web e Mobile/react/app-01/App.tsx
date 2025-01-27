import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá mundo</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>

      
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#1d633f',
    fontWeight: 'bold',
    fontSize: 32,
  },
  boxContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  box: {
    height: 100,
    width: 70,
    backgroundColor: '#4372d8',
  },
});
