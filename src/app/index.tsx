import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <Text style={styles.time}>7:06</Text>
      <Text style={styles.title}>HOLA MUNDO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#dfe3e8",
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  time: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  title: {
    marginTop: 16,
    fontSize: 36,
    fontWeight: "700",
    color: "#0b6fd3",
  },
});
