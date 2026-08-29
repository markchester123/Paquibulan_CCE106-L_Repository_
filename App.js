import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/StatCard';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Custom Dashboard</Text>
      <StatCard 
        title = "Total Users"
        value = "1,240"
        bgColor = "#54C98F"
        
      />
      <StatCard
        title = "Revenue"
        value = "$12,450"
        bgColor = "#54C9C9"
      />
      <StatCard
        title = "Pending Issues"
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
    color: '#1f2937'
  }
});
