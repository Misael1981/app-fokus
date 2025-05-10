import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#021123",
          },
          headerTintColor: "#FFF",
          drawerStyle: {
            backgroundColor: "#021123",
          },
          drawerLabelStyle: {
            color: "#FFF",
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="add-task/index"
          options={{
            drawerItemStyle: { display: "none" },
            title: "",
            headerLeft: () => {
              return (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={"#fff"}
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate("/tasks")}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{
            drawerLabel: "Timer",
            title: "",
          }}
        />
        <Drawer.Screen
          name="tasks/index"
          options={{
            drawerLabel: "Lista de tarefas",
            title: "",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
