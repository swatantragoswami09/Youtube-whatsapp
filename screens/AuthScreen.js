import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#F6F6F6", "#BFDFD4", "#448971", "#000000"]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <PageContainer>
          {/* Image */}
          <Image
            source={require("../assets/splash.png")}
            style={{ width: 150, height: 150, marginLeft: 95, marginTop: 50 }}
          />

          {/* SignUpform & LoginForm */}
          {isSignUp ? <SignUpForm /> : <SignUpForm />}

          {/* switch */}
        </PageContainer>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
