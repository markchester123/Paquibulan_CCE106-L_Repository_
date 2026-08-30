import { StyleSheet, Text, View, Image } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Custom Dashboard</Text>
      <StatCard 
        title = "Total Users"
        image = {require('./assets/User.png')}
        value = "1,240"
        bgColor = "#54C98F"
        
      />
      <StatCard
        title = "Revenue"
        image = {require('./assets/Revenue.png')}
        value = "$12,450"
        bgColor = "#54C9C9"
      />
      <StatCard
        title = "Pending Issues"
        image = {require('./assets/Pending.png')}
        value = "3"
        bgColor = "#548FC9"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f2937',
    textAlign: 'center',
  }
});