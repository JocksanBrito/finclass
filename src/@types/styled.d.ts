import 'styled-components';

declare module 'styled-components' {
  export interface Border {
    radius: {
      sm: number;
    };
  }
  export interface ColorType {
    main: string;
    onMain: string;
  }

  export type ColorsType =
    | 'primary'
    | 'backdrop'
    | 'background'
    | 'error'
    | 'placeholder';
}

export interface PaletteType {
  primary: ColorType;
  backdrop: ColorType;
  background: ColorType;
  error: ColorType;
  surface: ColorType;
}

// Typography

export interface TypographyProps {
  fontFamily: string;
  letterSpacing: number;
}

export interface Typography {
  regular: TypographyProps;
  semiBold: TypographyProps;
  bold: TypographyProps;
  titleBold: TypographyProps;
  titleLight: TypographyProps;
  titleRegular: TypographyProps;
  titleSemiBold: TypographyProps;
}

export type TypographyType =
  | 'regular'
  | 'semiBold'
  | 'bold'
  | 'light'
  | 'titleBold'
  | 'titleLight'
  | 'titleRegular'
  | 'titleSemiBold';

export interface DefaultTheme {
  typography: Typography;
  colors: PaletteType;
  borders: Border;
}
