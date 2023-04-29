import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const SignInForm = () => {
  const inputChangeHandler = () => {
    console.log("hi there");
  };
  return (
    <>
      <Input
        // id="email"
        label="Email"
        icon="mail"
        onInputChange={inputChangeHandler}
      />
      <Input
        // id="password"
        label="Password"
        icon="mail"
        onInputChange={inputChangeHandler}
      />
      <SubmitButton
        title="Log In"
        style={{ marginTop: 10 }}
        disabled={false}
        onPress={() => console.log("button press")}
      />
    </>
  );
};

export default SignInForm;

const styles = StyleSheet.create({});
