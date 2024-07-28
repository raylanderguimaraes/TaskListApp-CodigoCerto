import { useState } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "../components/Header";
import FormTask from "../components/FormTask";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(title) {
    const taskObject = {
      id: new Date().toISOString(),
      title: title,
    };
    const newTask = taskObject;
    setTasks([...tasks, newTask]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <FormTask addTitle={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    color: "#505050",
    marginBottom: 16,
  },
});
