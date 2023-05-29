import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatListScreen = (props) => {
  return (
    <View>
      <Text>ChatListScreen</Text>
      <Button
        title="go to chat screen"
        onPress={() => props.navigation.navigate("ChatScreen")}
      />
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({});
