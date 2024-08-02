import { useState } from "react";

import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import uuid from "react-native-uuid";
import { Fontisto } from "@expo/vector-icons";

import Header from "../components/Header";
import FormTask from "../components/FormTask";
import TaskItem from "../components/TaskItem";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(title) {
    if (!title) {
      Alert.alert(
        "Nova tarefa",
        "Preencha o campo para adicionar uma nova tarefa"
      );
    } else {
      const taskObject = {
        id: uuid.v4(),
        title: title,
        completed: false,
      };
      const newTask = taskObject;
      setTasks([...tasks, newTask]);
    }
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleCompleteTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  console.log(tasks);

  return (
    <View style={styles.container}>
      <Header />
      <FormTask addTitle={handleAddTask} />
      {tasks.length == 0 ? (
        <View style={styles.emptyList}>
          <Fontisto name="island" size={80} color="#70D17E" />
          <Text style={styles.text}>Nenhuma tarefa cadastrada</Text>
          <Text style={styles.text}>Só sombra e água fresca por enquanto!</Text>
        </View>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            style={styles.itemList}
            data={tasks}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TaskItem
                title={item.title}
                completed={item.completed}
                onComplete={() => handleCompleteTask(item.id)}
                onDelete={() => handleDeleteTask(item.id)}
              />
            )}
          />
        </View>
      )}
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
    marginVertical: 8,
  },

  emptyList: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
    width: "100%",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  itemList: {
    width: "90%",
  },
});
