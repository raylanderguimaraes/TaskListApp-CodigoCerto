import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function FormTask({ addTitle }) {
  const [title, setTitle] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  
  
  function handleAddTitle() {
    addTitle(title);
    setTitle("");
  }

  useEffect(() => {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    const formatedDate = currentDate.toLocaleDateString("pt-BR", options);
    setCurrentDate(formatedDate);
  }, []);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>{currentDate}</Text>
      <View style={styles.taskForm}>
        <TextInput
          style={styles.taskInput}
          placeholder="Incluir nova tarefa"
          onChangeText={(title) => setTitle(title)}
          onSubmitEditing={handleAddTitle}
          value={title}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTitle}>
          <FontAwesome
            name="plus"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 30,
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
    padding: 10,
    borderRadius: 12,
  },
});
