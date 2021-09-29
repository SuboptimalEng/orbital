import { ITheme } from '../types';
import { createTheme } from './utils';

export const lightTheme: ITheme = createTheme({
  activityBg: '#111827',
  activityFg: '#fafafa',
  activityHover: '#44475a',
  activityActive: '#007acc',

  // gray-200
  editorBg: '#e5e7eb',
  editorFg: '#000000',
  editorHover: '#44475a',
  editorBorder: '#000000',

  statusBg: '#007acc',
  statusFg: '#fafafa',
  statusHover: '#44475a',

  // blue
  hyperlink: '#007acc',

  scrollbarBg: '#9CA3AF',
  // gray-400
  scrollbarFg: '#111827',

  red: '#ff0000',
  blue: '#007acc',
  pink: '#ffc0cb',
  green: '#00ff00',
  orange: '#ffa500',
  purple: '#800080',
  yellow: '#ffff00',
});
