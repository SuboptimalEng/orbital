import { ITheme } from '../types';
import { createTheme } from './utils';

export const gruvboxTheme: ITheme = createTheme({
  activityBg: '#1d2021',
  activityFg: '#ebdbb2',
  activityHover: '#282828',
  // orange
  activityActive: '#fe8019',
  activityBorder: '#ebdbb2',

  sidebarBg: '#1d2021',
  sidebarFg: '#ebdbb2',
  sidebarHover: '#282828',
  sidebarBorder: '#ebdbb2',

  editorBg: '#1d2021',
  editorFg: '#ebdbb2',
  editorHover: '#282828',
  editorBorder: '#ebdbb2',

  statusBg: '#1d2021',
  statusFg: '#ebdbb2',
  statusHover: '#282828',
  statusBorder: '#ebdbb2',

  // orange
  hyperlink: '#fe8019',

  // hover
  scrollbarBg: '#282828',
  // orange
  scrollbarFg: '#fe8019',

  red: '#cc241d',
  blue: '#458588',
  pink: '#d3869b',
  green: '#98971a',
  orange: '#fe8019',
  purple: '#b16286',
  yellow: '#d79921',
});
