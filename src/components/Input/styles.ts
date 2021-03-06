import { Pressable } from "react-native";
import styled from "styled-components/native";
import Text from "../Text";
import { InputProps } from "./types";

export const Container = styled.View``;

export const Content = styled.View`
  justify-content: center;
`;

export const TextInput = styled.TextInput<InputProps>`
  background-color: ${({ theme }) => theme.colors.backdrop.main};
  color: ${({ theme }) => theme.colors.background.onMain};
  border-color: ${({ bordeColor }) => bordeColor};
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
  letter-spacing: ${({ theme }) => theme.typography.semiBold.letterSpacing}px;
  font-family: ${({ theme }) => theme.typography.semiBold.fontFamily};
  font-size: 13px;
  height: 50px;
  border-width: 1px;
  padding: 0 ${({ hasRightIcon }) => (hasRightIcon ? 40 : 15)}px 0
    ${({ hasLeftIcon }) => (hasLeftIcon ? 40 : 15)}px;
    border-width: 1px;
`;

export const Label = styled(Text)`
  margin-bottom: 10px;
`;

export const Error = styled(Text)`
  margin-top: 10px;
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.error.main};
`;

export const ToggleEye = styled.Pressable`
  right: 20px;
  position: absolute;
`;

export const EyeIcon = styled.Image`
  width: 20px;
  height: 10px;
`;

export const LeftIconContainer = styled.View`
  left: 15px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const RightIconContainer = styled.View`
  right: 15px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
