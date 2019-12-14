import { createStackNavigator } from "react-navigation";
import { MOVIES_HOME2, MOVIES_DETAILS2 } from "../routes";

import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";

export default createStackNavigator(
  {
    [MOVIES_HOME2]: MainScreen,
    [MOVIES_DETAILS2]: DetailsScreen
  },
  {
    headerMode: "none"
  }
);
