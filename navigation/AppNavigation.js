import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "../screens/AuthScreen";

const AppNavigation = () => {
  const isAuthenticated = true;
  return <NavigationContainer>{true && <AuthScreen />}</NavigationContainer>;
};

export default AppNavigation;

const styles = StyleSheet.create({});
