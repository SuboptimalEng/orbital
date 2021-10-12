import { ITheme } from '../types';
import { createTheme } from './utils';

export const lightTheme: ITheme = createTheme({
  activityBg: '#111827',
  activityFg: '#fafafa',
  activityHover: '#44475a',
  activityActive: '#007acc',

  searchBg: '#111827',
  searchFg: '#fafafa',

  editorBg: '#e5e7eb',
  editorFg: '#000000',
  editorHover: '#44475a',
  editorBorder: '#000000',

  cardBg: '#111827',
  cardFg: '#fafafa',
  previewBg: '#111827',
  previewFg: '#fafafa',

  statusBg: '#007acc',
  statusFg: '#fafafa',
  statusHover: '#44475a',

  hyperlink: '#007acc',

  scrollbarBg: '#9CA3AF',
  scrollbarFg: '#4B5563',

  red: '#ff0000',
  blue: '#007acc',
  pink: '#ffc0cb',
  green: '#00ff00',
  orange: '#ffa500',
  purple: '#800080',
  yellow: '#ffff00',
});
