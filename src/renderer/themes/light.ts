import { ITheme } from '../types';
import { createTheme } from './utils';

export const lightTheme: ITheme = createTheme({
  activityBg: '#111827',
  activityFg: '#fafafa',
  activityHover: '#44475a',
  activityActive: '#007acc',
  activityBorder: '#111827',

  // gray-200
  sidebarBg: '#e5e7eb',
  sidebarFg: '#000000',
  sidebarHover: '#44475a',
  sidebarBorder: '#e5e7eb',

  editorBg: '#fafafa',
  editorFg: '#000000',
  editorHover: '#44475a',
  editorBorder: '#000000',

  statusBg: '#007acc',
  statusFg: '#fafafa',
  statusHover: '#44475a',
  statusBorder: '#007acc',

  // gray-200
  scrollbarBg: '#e5e7eb',
  // blue
  scrollbarFg: '#007acc',

  red: '#ff0000',
  blue: '#007acc',
  pink: '#ffc0cb',
  green: '#00ff00',
  orange: '#ffa500',
  purple: '#800080',
  yellow: '#ffff00',
});
