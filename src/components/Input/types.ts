import { ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface Props extends TextInputProps {
  name?: string;
  error?: string;
  rightIcon: ReactNode;
  leftIcon: ReactNode;
}

export interface InputProps {
  boderColor: string;
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}
