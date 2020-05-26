import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

const GoalItem = props => {
    return (
      <TouchableNativeFeedback onPress={props.onDelete}>
          <View style={styles.listItem}>
              <Text>{props.title}</Text>
          </View>
       </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "silver",
        fontSize: 20,
        borderColor: "dodgerblue",
        borderWidth: 1,
        marginVertical: 5,
        borderWidth: 1,
        alignSelf: "center",
        width: "75%",
      },
})
export default GoalItem