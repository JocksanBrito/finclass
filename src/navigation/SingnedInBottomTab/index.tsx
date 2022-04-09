import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import home from "../../../assets/icons/home.png";
import download from "../../../assets/icons/download.png";
import boxsearch from "../../../assets/icons/boxsearch.png";
import boxmenu from "../../../assets/icons/boxmenu.png";

import Home from "../../pages/Home/index"
import Donwload from "../../pages/Donwloads/index"
import Search from "../../pages/Search/index"
import Menu from "../../pages/Menu/index"

import { Icon } from "./styles";

import Text from "../../components/Text";

const Tab = createBottomTabNavigator();

const SingnedInBottomTab: React.FC = () => {
  const { colors } = useTheme();

  const handleSizeTo80Percent = (size: number) => size * 0.8;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.background.onMain,
        tabBarInactiveTintColor: colors.background.main,
        tabBarStyle: {
          backgroundColor: colors.backdrop.main,
          borderTopColor: colors.backdrop.main,
        },
        header: () => null,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={home}
              size={handleSizeTo80Percent(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text type="bold" size={8} color={color}>
              Início
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="download"
        component={Donwload}
        options={{
          title: "Downloads",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={download}
              size={handleSizeTo80Percent(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text type="bold" size={8} color={color}>
              Downloads
            </Text>
          ),
        }}
      />
      
      <Tab.Screen
        name="boxsearch"
        component={Search}
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={boxsearch}
              size={handleSizeTo80Percent(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text type="bold" size={8} color={color}>
              Buscar
            </Text>
          ),
        }}
      />
      
      <Tab.Screen
        name="boxmenu"
        component={Menu}
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={boxmenu}
              size={handleSizeTo80Percent(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text type="bold" size={8} color={color}>
              Menu
            </Text>
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default SingnedInBottomTab;
