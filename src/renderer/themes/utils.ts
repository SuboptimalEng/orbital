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

  searchBg,
  searchFg,

  editorBg,
  editorFg,
  editorHover,
  editorBorder,

  cardBg,
  cardFg,
  previewBg,
  previewFg,

  statusBg,
  statusFg,
  statusHover,

  hyperlink,

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

    '--theme-search-bg': searchBg,
    '--theme-search-fg': searchFg,

    '--theme-editor-bg': editorBg,
    '--theme-editor-fg': editorFg,
    '--theme-editor-hover': editorHover,
    '--theme-editor-border': editorBorder,

    '--theme-card-bg': cardBg,
    '--theme-card-fg': cardFg,
    '--theme-preview-bg': previewBg,
    '--theme-preview-fg': previewFg,

    '--theme-status-bg': statusBg,
    '--theme-status-fg': statusFg,
    '--theme-status-hover': statusHover,

    '--theme-hyperlink': hyperlink,

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
