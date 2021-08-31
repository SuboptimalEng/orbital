import { ITheme, ICreateTheme } from '../types';

export function applyTheme(theme: ITheme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar as keyof ITheme]);
  });
}

export function createTheme({
  activityBackground,
  sidebarBackground,
  editorBackground,

  red,
  blue,
  green,
  orange,
  purple,
  yellow,
}: ICreateTheme): ITheme {
  return {
    '--theme-activity-bg': activityBackground,
    '--theme-sidebar-bg': sidebarBackground,
    '--theme-editor-bg': editorBackground,

    '--theme-red': red,
    '--theme-blue': blue,
    '--theme-green': green,
    '--theme-orange': orange,
    '--theme-purple': purple,
    '--theme-yellow': yellow,
  };
}
