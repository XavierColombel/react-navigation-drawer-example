import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

class SettingsContainer extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Settings",
    title: "Settings",
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" size={30} color="blue" />
        </TouchableOpacity>
      </View>
    )
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the SettingsContainer component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

SettingsContainer.defaultProps = {};

SettingsContainer.propTypes = {};

export default SettingsContainer;
