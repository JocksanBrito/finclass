import React from "react";
import { TypographyType } from 'styled-components';

export interface Props{
    title: string;
    onPress?: ()=> void;
    disabled?: boolean;
    icon?: React.ReactNode;
    color?: string;
    textColor?: string;
    outLined?: boolean;
    textType?: TypographyType;
};

export type ContainerProps = Pick<Props, "outLined" | "disabled" | "color" >

export interface TitleProps {
    type: TypographyType;
    color: string;

}