import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { validateInput } from "../utils/actions/formActions";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { getFirebaseApp } from "../utils/firebaseHelper";

const SignUpForm = () => {
  const inputChangeHandler = async (inputId, inputValue) => {
    const result = await validateInput(inputId, inputValue);
    console.log("result=>", result);
  };
  return (
    <>
      <Input
        id="firstName"
        label="First name"
        icon="user"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="password"
        label="password"
        icon="lock"
        onInputChange={inputChangeHandler}
      />
      <SubmitButton
        title="Sign Up"
        disabled={false}
        style={{ marginTop: 20 }}
        onPress={() => console.log("button press")}
      />
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
