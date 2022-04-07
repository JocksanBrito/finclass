import React from 'react'; 
import { useTheme } from 'styled-components';
import Button from './components/Button';
import Separator from './components/Separator';
import Text from "./components/Text"
import { Container } from './styles/style';
import BackButton from './components/BackButton/index';
import Dots from './components/Dots/';

const App : React.FC =  () => {
 const {typography} = useTheme();
  return<Container>
    <BackButton />
    <Text>Finclass Ativa</Text>
    <Dots amount={15}/>
    <Separator  height={20}/>
    <Dots amount={15}/>
    <Button textType='bold' title="Assine agora"></Button>
  </Container>
};

export default App;