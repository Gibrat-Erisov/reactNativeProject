import React, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";

import DrawerNav from "./DrawerNav";
import enterScreen from "./src/pages/enterScreen";

export default createSwitchNavigator(
  {
    Enter: enterScreen,
    App: DrawerNav
  },
  {
    initialRouteName: "Enter",
    headerMode: "none",
    mode: "modal"
  }
);
