// ================================================================
// Slices
// ================================================================

export interface IFile {
  name: string;
  path: string;
}

export interface IFolder {
  path: string;
  files: Array<IFile>;
}

// ================================================================
// Themes
// ================================================================

export interface ITheme {
  '--theme-activity-bg': string;
  '--theme-sidebar-bg': string;
  '--theme-editor-bg': string;

  '--theme-red': string;
  '--theme-blue': string;
  '--theme-green': string;
  '--theme-orange': string;
  '--theme-purple': string;
  '--theme-yellow': string;
}

export interface ICreateTheme {
  activityBackground: string;
  sidebarBackground: string;
  editorBackground: string;

  red: string;
  blue: string;
  green: string;
  orange: string;
  purple: string;
  yellow: string;
}
