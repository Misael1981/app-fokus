import { Pressable, Text, StyleSheet } from "react-native";

export const ActionsButton = ({ active, onPress, display }) => {
  return (
    <Pressable
      style={active ? styles.contentButtonActive : null}
      onPress={onPress}
    >
      <Text style={styles.contentButtonText}>{display}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contentButtonText: {
    fontSize: 12.5,
    color: "#fff",
    padding: 8,
  },
});
