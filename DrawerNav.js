import React from "react";
import { createDrawerNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigatorScreen from "./TabNavigator";

export default createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigatorScreen,
      navigationOptions: {
        drawerLabel: "tab",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "TabNavigator",
    order: ["TabNavigator"],

    contentOptions: {
      activeTintColor: "black",
      inactiveTintColor: "grey",
      activeBackgroundColor: "#30d0fe"
    }
  }
);
