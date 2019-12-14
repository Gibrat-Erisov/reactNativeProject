import React from "react";
import { View, Button } from "react-native";

export default function App(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Enter" onPress={() => props.navigation.navigate("App")} />
    </View>
  );
}
