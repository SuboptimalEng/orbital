import { ITheme } from '../types';
import { createTheme } from './utils';

export const draculaTheme: ITheme = createTheme({
  activityBg: '#21222c',
  activityFg: '#f8f8f2',
  activityHover: '#44475a',
  activityActive: '#ff79c6',

  searchBg: '#21222c',
  searchFg: '#f8f8f2',

  editorBg: '#343746',
  editorFg: '#f8f8f2',
  editorHover: '#44475a',
  editorBorder: '#f8f8f2',

  cardBg: '#21222c',
  cardFg: '#f8f8f2',
  previewBg: '#21222c',
  previewFg: '#f8f8f2',

  statusBg: '#191a21',
  statusFg: '#f8f8f2',
  statusHover: '#44475a',

  hyperlink: '#ff79c6',

  scrollbarBg: '#21222c',
  scrollbarFg: '#ff79c6',

  red: '#ff5555',
  blue: '#8be9fd',
  pink: '#ff79c6',
  green: '#50fa7b',
  orange: '#ffb86c',
  purple: '#bd93f9',
  yellow: '#f1fa8c',
});
