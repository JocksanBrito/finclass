import React from "react";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import { fonts } from "./src/styles/fonts";
import { theme } from "./src/styles/theme";
import App from "./src/index";

export default function Main() {

  const [fontsLoaded] = useFonts(fonts)
  
  if (!fontsLoaded) return null;
  
  return <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
};