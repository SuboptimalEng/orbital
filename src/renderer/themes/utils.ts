import { lightTheme } from './light';
import { draculaTheme } from './dracula';
import { gruvboxTheme } from './gruvbox';
import { ITheme, ICreateTheme, ISelectableThemes } from '../types';

export const selectableThemes: ISelectableThemes = [
  {
    name: 'light',
    theme: lightTheme,
  },
  {
    name: 'dracula',
    theme: draculaTheme,
  },
  {
    name: 'gruvbox',
    theme: gruvboxTheme,
  },
];

export function applyRandomTheme() {
  const randomTheme =
    selectableThemes[Math.floor(Math.random() * selectableThemes.length)].theme;
  applyTheme(randomTheme);
}

export function applyTheme(theme: ITheme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar as keyof ITheme]);
  });
}

export function createTheme({
  activityBg,
  activityFg,
  activityHover,
  activityActive,
  activityBorder,

  sidebarBg,
  sidebarFg,
  sidebarHover,
  sidebarBorder,

  editorBg,
  editorFg,
  editorHover,
  editorBorder,

  statusBg,
  statusFg,
  statusHover,
  statusBorder,

  scrollbarBg,
  scrollbarFg,

  red,
  blue,
  green,
  orange,
  purple,
  yellow,
}: ICreateTheme): ITheme {
  return {
    '--theme-activity-bg': activityBg,
    '--theme-activity-fg': activityFg,
    '--theme-activity-hover': activityHover,
    '--theme-activity-active': activityActive,
    '--theme-activity-border': activityBorder,

    '--theme-sidebar-bg': sidebarBg,
    '--theme-sidebar-fg': sidebarFg,
    '--theme-sidebar-hover': sidebarHover,
    '--theme-sidebar-border': sidebarBorder,

    '--theme-editor-bg': editorBg,
    '--theme-editor-fg': editorFg,
    '--theme-editor-hover': editorHover,
    '--theme-editor-border': editorBorder,

    '--theme-status-bg': statusBg,
    '--theme-status-fg': statusFg,
    '--theme-status-hover': statusHover,
    '--theme-status-border': statusBorder,

    '--theme-scrollbar-bg': scrollbarBg,
    '--theme-scrollbar-fg': scrollbarFg,

    '--theme-red': red,
    '--theme-blue': blue,
    '--theme-green': green,
    '--theme-orange': orange,
    '--theme-purple': purple,
    '--theme-yellow': yellow,
  };
}
