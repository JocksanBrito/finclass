import React from "react";
import { useTheme } from "styled-components";
import Button from "./components/Button";
import Text from "./components/Text";
import { Container } from "./styles/style";
import Separator from "./components/Separator";
import BackButton from "./components/BackButton/index";
import Dots from "./components/Dots/";
import Input from "./components/Input";

const App: React.FC = () => {
  const { typography } = useTheme();
  return (
    <Container>
      <BackButton />
      <Separator height={20} />
      <Dots amount={15} />
      <Text>Finclass Ativa</Text>
      <Dots amount={15} />
      <Separator height={20} />
      <Input
        name="Email"
        error="Email Inválido"
        rightIcon={undefined}
        leftIcon={undefined}
      />
      <Input
        secureTextEntry
        name="Senha"
        error="Digite sua senha"
        rightIcon={undefined}
        leftIcon={undefined}
      />
      <Separator height={20} />
      <Button textType="bold" title="Assine agora"></Button>
    </Container>
  );
};

export default App;
