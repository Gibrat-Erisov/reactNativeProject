import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { w, h } from "../../../constans";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Header extends Component {
  render() {
    const { container, textStyle, leftButtonStyle } = styles;
    const { title, onPress, leftIcon } = this.props;
    return (
      <View style={container}>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name={leftIcon}
            size={25}
            color="#fff"
            style={[
              leftButtonStyle,
              {
                paddingLeft: leftIcon ? 5 : 0,
                paddingRight: leftIcon ? 10 : 0
              }
            ]}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} elipsizeMode="tail" style={textStyle}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: h * 0.13,
    backgroundColor: "#30d0fe",
    paddingTop: 40,
    paddingLeft: 20,
    flexDirection: "row"
  },

  textStyle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    width: w * 0.9
  },

  iconStyle: {
    color: "#fff"
  },

  leftButtonStyle: {
    paddingTop: 10
  }
});
