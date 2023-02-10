import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import QuestionCard from "./src/components/QuestionCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test your trivia knowledge!</Text>
      <QuestionCard />
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
