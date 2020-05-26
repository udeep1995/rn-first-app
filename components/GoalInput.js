import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Modal } from "react-native";
const GoalInput = (props) => {
  
    const [enteredGoal, setEnteredGoal] = useState("");

  /**
   * Handles goal by using hooks
   * @param {*} enteredGoal - goal title entered by user
   */
  const handleGoalInput = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  /**
   * Handles add button
   */
  const handleAddButton = () => {
    if (!enteredGoal.length) {
      return;
    }
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  /**
   * Handles cancel button
   */
  const handleCancelButton = () => {
    props.onCancelGoal();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={handleGoalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="tomato"
              onPress={handleCancelButton}
            />
          </View>
          <View style={styles.button}>
            <Button color="dodgerblue" title="ADD" onPress={handleAddButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "45%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "75%",
    padding: 15,
    fontSize: 20,
    marginBottom: 10,
  },
});
export default GoalInput;
