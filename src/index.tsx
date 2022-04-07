import React from 'react'; 
import { useTheme } from 'styled-components';
import Text from "./components/text"
import { Container } from './styles/style';

const App : React.FC =  () => {
 const {typography} = useTheme();
  return<Container>
     <Text>
       Finclass Ativa
     </Text>
  </Container>
};

export default App;