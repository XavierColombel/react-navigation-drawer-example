import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

class MainContainer extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Main",
    title: "Main",
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
        <Text>I am the MainContainer component</Text>
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

MainContainer.defaultProps = {};

MainContainer.propTypes = {};

export default MainContainer;
