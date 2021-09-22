import { ITheme } from '../types';
import { createTheme } from './utils';

export const draculaTheme: ITheme = createTheme({
  activityBg: '#282a36',
  activityFg: '#f8f8f2',
  activityHover: '#44475a',
  // pink
  activityActive: '#ff79c6',
  activityBorder: '#f8f8f2',

  sidebarBg: '#282a36',
  sidebarFg: '#f8f8f2',
  sidebarHover: '#44475a',
  sidebarBorder: '#f8f8f2',

  editorBg: '#282a36',
  editorFg: '#f8f8f2',
  editorHover: '#44475a',
  editorBorder: '#f8f8f2',

  statusBg: '#282a36',
  statusFg: '#f8f8f2',
  statusHover: '#44475a',
  statusBorder: '#f8f8f2',

  // pink
  hyperlink: '#ff79c6',

  // hover
  scrollbarBg: '#44475a',
  // pink
  scrollbarFg: '#ff79c6',

  red: '#ff5555',
  blue: '#8be9fd',
  pink: '#ff79c6',
  green: '#50fa7b',
  orange: '#ffb86c',
  purple: '#bd93f9',
  yellow: '#f1fa8c',
});
