import { lightTheme } from './light';
import { draculaTheme } from './dracula';
import { gruvboxTheme } from './gruvbox';
import { ITheme, ICreateTheme } from '../types';

interface ISelectableTheme {
  name: string;
  theme: ITheme;
}

// NOTE: This is another way to declare an interface for an array of selectable themes.
// interface ISelectableThemes extends Array<ISelectableTheme> {}

export const selectableThemes: Array<ISelectableTheme> = [
  {
    name: 'Light',
    theme: lightTheme,
  },
  {
    name: 'Dracula',
    theme: draculaTheme,
  },
  {
    name: 'Gruvbox',
    theme: gruvboxTheme,
  },
];

export function applyRandomTheme(): string {
  const randomTheme =
    selectableThemes[Math.floor(Math.random() * selectableThemes.length)];
  _applyTheme(randomTheme.theme);
  return randomTheme.name;
}

export function applyThemeByName(themeName: string) {
  const theme =
    selectableThemes.find((theme) => theme.name === themeName)?.theme ||
    gruvboxTheme;
  _applyTheme(theme);
}

function _applyTheme(theme: ITheme) {
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
