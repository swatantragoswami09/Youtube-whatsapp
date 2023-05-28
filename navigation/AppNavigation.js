import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "../screens/AuthScreen";
import MainNavigator from "./MainNavigator";

const AppNavigation = () => {
  const isAuth = true;
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {/* {true && <AuthScreen />} */}
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
