import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        Task List <Text style={styles.logoApp}>App</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  logo: {
    fontFamily: "Roboto_900Black",
    fontSize: 20,
  },
  logoApp: {
    fontFamily: "Roboto_900Black",
    color: "#70D17E",
  },
});
