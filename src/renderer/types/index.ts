// ================================================================
// Slices
// ================================================================

export const Activities = {
  Explorer: 'explorer',
  Settings: 'settings',
} as const;

export type ActivityNameTypes = typeof Activities[keyof typeof Activities];

export interface IActivity {
  name: ActivityNameTypes;
  icon: string;
  isActive: boolean;
}

export interface IActivityBar {
  activityBar: Array<IActivity>;
}

export interface IFile {
  name: string;
  path: string;
  ctime: string;
}

export interface IFolder {
  path: string;
  files: Array<IFile>;
}

export interface IQuery {
  query: string;
  sortByName: string;
}

// ================================================================
// Themes
// ================================================================

export interface ITheme {
  '--theme-activity-bg': string;
  '--theme-activity-fg': string;
  '--theme-activity-hover': string;
  '--theme-activity-active': string;
  '--theme-activity-border': string;

  '--theme-editor-bg': string;
  '--theme-editor-fg': string;
  '--theme-editor-hover': string;
  '--theme-editor-border': string;

  '--theme-status-bg': string;
  '--theme-status-fg': string;
  '--theme-status-hover': string;
  '--theme-status-border': string;

  '--theme-hyperlink': string;

  '--theme-scrollbar-bg': string;
  '--theme-scrollbar-fg': string;

  '--theme-red': string;
  '--theme-blue': string;
  '--theme-green': string;
  '--theme-orange': string;
  '--theme-purple': string;
  '--theme-yellow': string;
}

export interface ICreateTheme {
  activityBg: string;
  activityFg: string;
  activityHover: string;
  activityActive: string;
  activityBorder: string;

  editorBg: string;
  editorFg: string;
  editorHover: string;
  editorBorder: string;

  statusBg: string;
  statusFg: string;
  statusHover: string;
  statusBorder: string;

  hyperlink: string;

  scrollbarBg: string;
  scrollbarFg: string;

  red: string;
  blue: string;
  pink: string;
  green: string;
  orange: string;
  purple: string;
  yellow: string;
}

export interface ISelectableTheme {
  name: string;
  theme: ITheme;
}

export interface ISelectableThemes extends Array<ISelectableTheme> {}
