import styled from "styled-components/native";
import { Props } from "./types";

export const Container = styled.View`

`;

export const Dot = styled.View`
    background-color: ${({theme})=> theme.colors.primary.main }
    width: 5px;
    height: 5px;
    border-radius: 2px;
`;

export const ContainerDots = styled.View<Props>`
    flex-direction: row;
    width: ${({amount})=> amount *10}px;
    justify-content: space-between;

`;