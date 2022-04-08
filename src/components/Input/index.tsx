import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";

import * as Styled from "./styles";
import { Props } from "./types";

const Input = ({
  error,
  name,
  placeholder,
  secureTextEntry,
  rightIcon,
  leftIcon,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const { colors } = useTheme();

  const [hasFocus, setHasFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const bordeColor = useMemo(() => {
    if (error) return colors.error.main;
    if (hasFocus) return colors.primary.main;
    return colors.background.main;
  }, [error, hasFocus, colors]);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.TextInput
          bordeColor={bordeColor}
          onFocus={(e)=> {
            setHasFocus(true)
            onFocus?.(e) 
          }}
          onBlur={(e)=> {
            setHasFocus(false)
            onBlur?.(e) 
          }}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={colors.placeholder.main}
          selectionColor={colors.placeholder.onMain}
          {...rest}
        />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Input;
