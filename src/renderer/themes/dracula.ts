import { ITheme } from '../types';
import { createTheme } from './utils';

export const draculaTheme: ITheme = createTheme({
  activityBg: '#21222c',
  activityFg: '#f8f8f2',
  activityHover: '#44475a',
  // pink
  activityActive: '#ff79c6',

  editorBg: '#343746',
  editorFg: '#f8f8f2',
  editorHover: '#44475a',
  editorBorder: '#f8f8f2',

  statusBg: '#191a21',
  statusFg: '#f8f8f2',
  statusHover: '#44475a',

  // pink
  hyperlink: '#ff79c6',

  // hover
  scrollbarBg: '#44475a',
  scrollbarFg: '#21222c',

  red: '#ff5555',
  blue: '#8be9fd',
  pink: '#ff79c6',
  green: '#50fa7b',
  orange: '#ffb86c',
  purple: '#bd93f9',
  yellow: '#f1fa8c',
});
