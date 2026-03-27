import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre a tela</Text>
      <Link href="/index" style={styles.button}>
      Go to Home screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ab646',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
  },
   button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

