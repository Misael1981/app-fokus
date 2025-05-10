import { Pressable } from "react-native";
import { TextInput, View, Text, SafeAreaView } from "react-native";
import { IconSave } from "../../Components/Icons";
import { StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

export default function AddTask() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      bahavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar uma tarefa</Text>
          <Text style={styles.label}>Em que que você está trabalhando?</Text>
          <TextInput style={styles.input} numberOfLines={10} multiline={true} />
          <View style={styles.actions}>
            <Pressable style={styles.button}>
              <IconSave />
              <Text>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 16,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
  },
  inner: {
    backgroundColor: "#98a0a8",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: 600,
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    height: 150,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
