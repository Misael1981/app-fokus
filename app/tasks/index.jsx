import { View, Text } from "react-native-web";
import TaskItem from "../../Components/TaskItem";
import { FokusButton } from "../../Components/FokusButton";
import { IconPlus } from "../../Components/Icons";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Lista de Tarefas</Text>
        <View style={styles.inner}>
          <TaskItem completed text={"Estudar React"} />
          <TaskItem text={"Estudar React Native"} />
        </View>
        <FokusButton
          title={"Adicionar nova tarefa"}
          icon={<IconPlus outline />}
          outline
          onPress={() => router.navigate("/add-task")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#021123",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
  },
  inner: {
    gap: 8,
  },
});
