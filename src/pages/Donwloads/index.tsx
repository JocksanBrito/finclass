import React from "react";
import { View, Text } from "react-native";
import Separator from "../../components/Separator";
import donwload from "../../../assets/icons/download-rounded.png";
import { Container, Icon, Title } from "./styles";
import { useTheme } from "styled-components";
import Dots from "../../components/Dots";

const Donwloads: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Icon source={donwload} style={{ tintColor: colors.primary.main }} />
      <Separator height={40} />
      <Title size={22} type="bold">
        Você não tem Downloads
      </Title>
      <Separator height={20} />
      <Title>{`Os vídeos e aulas que baixar\nvão aparecer aqui`}</Title>
      <Separator height={20} />
      <Dots amount={6} />
    </Container>
  );
};

export default Donwloads;
