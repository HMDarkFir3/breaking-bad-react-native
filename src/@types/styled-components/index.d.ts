import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primary: string;
      secondary: string;
      placeholder_color: string;
      white: string;
    };

    fonts: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
