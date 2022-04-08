import React from "react";
import { useTheme } from "styled-components";
import Acess from "./pages/Acess";

const App: React.FC = () => {
  const { typography } = useTheme();
  return<Acess />  
};

export default App;
