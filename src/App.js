import React, { Component } from "react";
import { AppRegistry } from "react-native";

import { StackNavigator, DrawerNavigator } from "react-navigation";

import DrawerMenu from "./containers/DrawerMenu";

import MainContainer from "./containers/MainContainer";
import SettingsContainer from "./containers/SettingsContainer";

const MainScreenNavigator = StackNavigator({
  Main: { screen: MainContainer },
  Settings: { screen: SettingsContainer }
});

const Drawer = DrawerNavigator(
  {
    Main: { screen: MainScreenNavigator }
  },
  {
    contentComponent: DrawerMenu,
    drawerWidth: 200
  }
);

export default Drawer;
