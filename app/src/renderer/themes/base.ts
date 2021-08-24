import { createTheme } from './utils';

export interface ITheme {
  [key: string]: string;
}

export const baseTheme = createTheme({
  // primary: 'blue',
  primary: '0, 0, 255',
  // secondary: '#991B1B',
  secondary: '153, 27, 27',
  textBase: '255, 255, 255',
});
