import { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

export default function FormTask({ addTitle }) {
  const [title, setTitle] = useState("");

  function handleAddTitle() {
    addTitle(title);
    setTitle("");
  }

  return (
    <View style={styles.formContainer}>
      {/* Deixar essa data dinâmica, pegando data do sistema */}
      <Text style={styles.text}>Sexta-Feira, 26 de julho de 2024</Text>
      <View style={styles.taskForm}>
        <TextInput
          style={styles.taskInput}
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTitle}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: "90%",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto_400Regular",
    color: "#505050",
    marginBottom: 16,
  },

  taskForm: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  taskInput: {
    backgroundColor: "#fff",
    flex: 10,
    padding: 10,
    borderRadius: 12,
  },
  addButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#70D17E",
    padding: 8,
    borderRadius: 12,
  },
});
