import styled from "styled-components/native";
import { TextStyleProps } from "./types"; 


export const Container = styled.Text<TextStyleProps> `
    letter-spacing: ${({ theme, type}) => theme.typography[type].letterSpacing}px;
    font-Family: ${({ theme, type}) => theme.typography[type].fontFamily};
    font-size: ${({ size}) => size}px;
    color: ${({ color}) => color};
`;

