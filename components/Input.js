import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import colors from "../constants/colors";

const Input = (props) => {
  const onChangeText = (text) => {
    props.onInputChange(props.id, text);
  };
  return (
    <>
      {/* label */}
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.container}>
        {/* icon */}
        <Feather name={props.icon} size={24} color="black" />
        {/* input */}
        <TextInput
          {...props}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
        />

        {/* text */}
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: colors.nearlyWhite,
    flexDirection: "row",
  },
  label: {
    marginVertical: 8,
    fontFamily: "bold",
    letterSpacing: 0.3,
  },
  input: {
    color: colors.textColor,
    flex: 1,
    marginLeft: 5,
    fontFamily: "regular",
  },
});
