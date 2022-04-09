import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import home from "../../../assets/icons/home.png";
import download from "../../../assets/icons/download.png";
import boxsearch from "../../../assets/icons/boxsearch.png";
import boxmenu from "../../../assets/icons/boxmenu.png";

import { Icon } from "./styles";

import Text from "../../components/Text";
import Access from "../../pages/Access";

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
        component={Access}
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
        component={Access}
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
        component={Access}
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
        component={Access}
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
