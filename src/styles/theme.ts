import { DefaultTheme } from "styled-components";
import {appFonts} from "./fonts"
import { appColors } from  "./colors"

export const theme: DefaultTheme = {
    typography: {
        regular: {
            fontFamily: appFonts.regular,
            letterSpacing: 0,
            
        },
        semiBold : {
            fontFamily: appFonts.semiBold,
            letterSpacing: 0,

        },
        bold : {
            fontFamily: appFonts.bold,
            letterSpacing: 0,

        },
    },
    colors: {
        primary: {
            main: appColors.brand01,
            onMain: appColors.neutralDarkLightest,
        },
        backdrop : {
            main: appColors.neutralDark,
            onMain: appColors.neutralDarkLightest,
        },
        error: {
            main: appColors.errorDarkest,
            onMain: appColors.neutralDarkLightest,
        }, 
        background: {
            main: appColors.neutralDarkest,
            onMain: appColors.neutralDarkLightest,
        },
        placeholder: {
            main: appColors.neutralMedium,
            onMain: appColors.neutralDarkLightest,
        },
    },
        borders: {
            radius: {
                 sm: 5,
            },
        }
}