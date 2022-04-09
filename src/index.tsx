import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigation from "./navigation/index";
import { StatusBar } from "expo-status-bar";
import  AuthProvider from "./context/Auth";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
