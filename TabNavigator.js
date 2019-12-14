import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import MainScreen from "./src/pages/MainScreen";
import Screen1 from "./src/pages/Screen1";
import Screen2 from "./src/pages/Screen2";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsTabs = createBottomTabNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        tabBarLabel: "home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={24}></Ionicons>
        )
      }
    },
    videocam: {
      screen: Screen1,
      navigationOptions: {
        tabBarLabel: "videocam",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-videocam" color={tintColor} size={24} />
        )
      }
    },
    settings: {
      screen: Screen2,
      navigationOptions: {
        tabBarLabel: "settings",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "MainScreen",
    order: ["videocam", "MainScreen", "settings"],

    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "grey",
      activeBackgroundColor: "#30d0fe"
    }
  }
);

export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });
