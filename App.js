import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
// Components
import GameLogic from "./src/components/GameLogic";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GameLogic />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
