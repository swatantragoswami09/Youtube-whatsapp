import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);

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
          {isSignUp ? <SignUpForm /> : <SignInForm />}

          {/* switch */}
          <TouchableOpacity
            onPress={() => setIsSignUp((prevState) => !prevState)}
            style={{
              position: "absolute",

              top: isSignUp ? 650 : 455,
              marginLeft: 135,
            }}
          >
            <Text>Switch to {isSignUp ? "Sign in" : "Sign up"}</Text>
          </TouchableOpacity>
        </PageContainer>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
