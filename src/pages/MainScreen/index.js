import { createStackNavigator } from "react-navigation";
import { MOVIES_HOME, MOVIES_DETAILS } from "../routes";

import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";

export default createStackNavigator(
  {
    [MOVIES_HOME]: MainScreen,
    [MOVIES_DETAILS]: DetailsScreen
  },
  {
    headerMode: "none"
  }
);
