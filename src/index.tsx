import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigation from './navigation/index';
import { StatusBar } from "expo-status-bar";



const App: React.FC = () => {
 
  return <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Navigation />  
      </NavigationContainer>
  </>
};

export default App;
