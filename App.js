import React from "react";
import { Provider } from "react-redux";
import store from "./src/reducer/store";

import SwitchNav from "./SwitchNav";

export default function App() {
  return (
    <Provider store={store}>
      <SwitchNav />
    </Provider>
  );
}
