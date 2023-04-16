import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      green: string;
      green200: string;
      green900: string;
      gray: string;
      gray200: string;
      gray500: string,
      gray900: string;
      white: string;
      red: string;

      "white/gray900": string;
      "gray700/white200": string;
      "gradientSuccess/gray900": string,
    "gradientError/gray900": string,
    };
  }
}
