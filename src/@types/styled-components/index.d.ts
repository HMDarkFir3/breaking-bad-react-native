import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primary: string;
      secondary: string;
      placeholder_color: string;
      primary_text: string;
      secondary_text: string;
    };

    fonts: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
