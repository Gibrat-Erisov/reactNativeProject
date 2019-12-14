import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Header from "../../components/Header";
import { w, h } from "../../../constans";

export default class DetailsScreen extends Component {
  render() {
    const { image, info, name } = this.props.navigation.state.params;
    const { navigation } = this.props;
    const { container, h1, h2, sub, cover } = styles;
    return (
      <View style={container}>
        <Header
          title={name}
          leftIcon="chevron-left"
          onPress={() => navigation.goBack()}
        />
        <ScrollView>
          <View style={sub}>
            <Image style={cover} source={{ uri: image }} />
            <Text style={h1}>{name}</Text>
            <Text style={h2}>{info}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  h2: {
    fontSize: 15,
    color: "gray",
    textAlign: "center"
  },
  container: {},
  sub: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: w * 0.06,
    paddingBottom: h * 0.1,
    paddingTop: h * 0.03
  },
  cover: {
    width: w / 2,
    height: w * 0.8,
    borderRadius: 10,
    alignSelf: "center"
  }
});
