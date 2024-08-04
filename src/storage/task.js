import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@taskListApp_key";

async function save(newTaskList) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTaskList));
  } catch (error) {
    throw error;
  }
}

async function getTasks() {
  try {
    const tasks = await AsyncStorage.getItem(STORAGE_KEY);
    return tasks;
  } catch (error) {
    throw error;
  }
}

async function deleteTask(taskId) {
  try {
    await AsyncStorage.removeItem(taskId);
  } catch (error) {
    throw error;
  }
}

async function updateTask(updateTasks) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updateTasks));
  } catch (error) {
    throw error;
  }
}

export const taskStorage = {
  save,
  getTasks,
  deleteTask,
  updateTask,
};
