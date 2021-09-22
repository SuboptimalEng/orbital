import { ITheme } from '../types';
import { createTheme } from './utils';

export const draculaTheme: ITheme = createTheme({
  activityBg: '#343746',
  activityFg: '#f8f8f2',
  activityHover: '#44475a',
  // pink
  activityActive: '#ff79c6',
  activityBorder: '#343746',

  sidebarBg: '#21222c',
  sidebarFg: '#f8f8f2',
  sidebarHover: '#44475a',
  sidebarBorder: '#21222c',

  editorBg: '#282a36',
  editorFg: '#f8f8f2',
  editorHover: '#44475a',
  editorBorder: '#f8f8f2',

  statusBg: '#191a21',
  statusFg: '#f8f8f2',
  statusHover: '#44475a',
  statusBorder: '#191a21',

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
