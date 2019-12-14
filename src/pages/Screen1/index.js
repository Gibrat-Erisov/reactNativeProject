import { createStackNavigator } from "react-navigation";
import { MOVIES_HOME1, MOVIES_DETAILS1 } from "../routes";

import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";

export default createStackNavigator(
  {
    [MOVIES_HOME1]: MainScreen,
    [MOVIES_DETAILS1]: DetailsScreen
  },
  {
    headerMode: "none"
  }
);
