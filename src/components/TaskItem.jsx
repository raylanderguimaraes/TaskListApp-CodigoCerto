import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TaskItem({ title, onDelete, onComplete, completed }) {
  return (
    <View
      style={completed ? styles.itemContainerComplete : styles.itemContainer}>
      <Text style={completed ? styles.complete : styles.titleTask}>
        {title}
      </Text>
      <View style={styles.buttonContainer}>
        <BouncyCheckbox
          size={24}
          disableText
          fillColor="#70D17E"
          unFillColor="#FFFFFF"
          iconStyle={{ borderColor: "#70D17E" }}
          innerIconStyle={{ borderWidth: 2 }}
          isChecked={completed}
          onPress={onComplete}
        />

        <TouchableOpacity onPress={onDelete}>
          <FontAwesome name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-between",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Shadow for Android
    elevation: 5,
  },
  itemContainerComplete: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0.6,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Shadow for Android
    elevation: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "20%",
  },

  titleTask: {
    width: "80%",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
  complete: {
    width: "80%",
    textDecorationLine: "line-through",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
});
