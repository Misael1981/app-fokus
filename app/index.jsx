import { Image, View, Text, StyleSheet } from "react-native";
import { FokusButton } from "../Components/FokusButton";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {"\n"} produtividade {"\n"}
          <Text style={styles.bold}>mergulhe no que {"\n"} importa</Text>
        </Text>
        <Image source={require("../assets/images/home.png")} />
        <FokusButton
          title={"Quero iniciar!"}
          onPress={() => router.navigate("/pomodoro")}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    backgroundColor: "#021123",
  },
  inner: {
    gap: 16,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
  },
  bold: {
    fontWeight: "bold",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});
