import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Title} from './styles';

const Main: React.FC = () => {
  const {typography} = useTheme();
  return (
    <Container>
      <StatusBar />
      <Title>Finclass.v2</Title>
    </Container>
  );
};

export default Main;
