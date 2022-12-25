import { StyleSheet, Text, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: "white",
    padding: 12,
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
  },
});
