import { ITheme } from './base';

export function applyTheme(theme: ITheme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export interface ICreateTheme {
  primary: string;
  secondary: string;
  textBase: string;
}

export function createTheme({ primary, secondary, textBase }: ICreateTheme) {
  return {
    '--theme-primary': primary,
    '--theme-secondary': secondary,
    '--theme-text-base': textBase,
  };
}
