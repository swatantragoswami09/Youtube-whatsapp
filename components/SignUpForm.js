import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { validateInput } from "../utils/actions/formActions";
import Input from "./Input";

const SignUpForm = () => {
  const inputChangeHandler = (inputId, inputValue) => {
    validateInput(inputId, inputValue);
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
        icon="user"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="password"
        label="password"
        icon="user"
        onInputChange={inputChangeHandler}
      />
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
