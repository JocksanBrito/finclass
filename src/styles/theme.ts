import {DefaultTheme} from 'styled-components';
import appColors from './colors';
import {fonts} from './fonts';

export const theme: DefaultTheme = {
  typography: {
    regular: {
      fontFamily: fonts.regular,
      letterSpacing: 0,
    },
    semiBold: {
      fontFamily: fonts.semiBold,
      letterSpacing: 0,
    },
    bold: {
      fontFamily: fonts.bold,
      letterSpacing: 0,
    },
    light: {
      fontFamily: fonts.light,
      letterSpacing: 0,
    },
    titleBold: {
      fontFamily: fonts.titleBold,
      letterSpacing: 0,
    },
    titleLight: {
      fontFamily: fonts.titleLight,
      letterSpacing: 0,
    },
    titleRegular: {
      fontFamily: fonts.titleRegular,
      letterSpacing: 0,
    },
    titleSemiBold: {
      fontFamily: fonts.titleSemiBold,
      letterSpacing: 0,
    },
  },

  borders: {
    radius: {
      sm: 5,
    },
  },
  colors: {
    primary: {
      main: appColors.brand01,
      onMain: appColors.neutralLightest,
    },
    backdrop: {
      //cortina de fundo
      main: appColors.neutralDark,
      onMain: appColors.neutralLightest,
    },
    backgound: {
      main: appColors.neutralDarkest,
      onMain: appColors.neutralLightest,
    },
    error: {
      main: appColors.neutralError,
      onMain: appColors.neutralLightest,
    },
    placeholder: {
      main: appColors.neutralMedium,
      onMain: appColors.neutralLightest,
    },
  },
};
