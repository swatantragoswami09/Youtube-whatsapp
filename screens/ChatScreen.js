import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

// ["#f78ca0", "#f9748f", "#fd868c", "#fe9a8b"]

// ["#1FD1F9", "#f9748f", "#fd868c", "#fe9a8b"]

const ChatScreen = () => {
  const [messageText, setMessageText] = React.useState("");
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#f78ca0", "#f9748f", "#fd868c", "#fe9a8b"]}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={100}
        >
          <LinearGradient
            style={{ flex: 1 }}
            colors={["#1FD1F9", "#f9748f", "#fd868c", "#fe9a8b"]}
          >
            <PageContainer>
              <Text>hi thre your chat is started</Text>
            </PageContainer>
          </LinearGradient>
          <View style={styles.inputContainer}>
            {/* plus button */}
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log("button is pressed")}
            >
              <AntDesign name="pluscircle" size={24} color={colors.white} />
            </TouchableOpacity>

            {/* input */}
            <TextInput
              onChange={(text) => console.log(text)}
              style={styles.textBox}
            />

            {messageText === "" && (
              <TouchableOpacity
                style={styles.mediaButton}
                onPress={() => console.log("camera button is pressed")}
              >
                <FontAwesome name="camera" size={24} color={colors.white} />
              </TouchableOpacity>
            )}
            {messageText !== "" && (
              <TouchableOpacity
                style={{ ...styles.mediaButton, ...styles.sendButton }}
                onPress={() => console.log("camera button is pressed")}
              >
                <FontAwesome name="send" size={24} color={colors.white} />
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 1,
    width: 35,
  },
});
