import React from "react";
import { View } from "react-native";

import Header from "../../components/Header";
import ImageCard from "../../components/ImageCard";
import { MOVIES_DETAILS2 } from "../routes";

export default function App(props) {
  const { navigation } = props;

  return (
    <View>
      <Header
        title="React APP"
        leftIcon="bars"
        onPress={() => navigation.openDrawer()}
      />

      <ImageCard navigation={navigation} details={MOVIES_DETAILS2} />
    </View>
  );
}
