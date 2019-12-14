import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { w, h } from "../../../constans";

export default class ImageCard extends Component {
  render() {
    const { h1, cover, container, wrapper } = styles;
    const { movies, navigation, details } = this.props;

    return (
      <ScrollView>
        <View style={wrapper}>
          {movies.map((movie, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(details, movie)}
              >
                <View style={container}>
                  <Image style={cover} source={{ uri: movie.image }} />
                  <Text style={h1}>{movie.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    width: w / 2.4
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
    alignSelf: "center"
  },
  container: {
    width: w / 2.1,
    marginBottom: h * 0.03
  },
  wrapper: {
    marginTop: h * 0.03,
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 2,
    justifyContent: "space-around",
    marginBottom: h * 0.15
  }
});
