import { createSlice } from '@reduxjs/toolkit';
import { IActivity, IActivityBar } from '../types/index';

const initialState: IActivityBar = {
  activityBar: [
    {
      name: 'fileSystem',
      isActive: false,
      icon: '📁',
    },
    {
      name: 'search',
      isActive: false,
      icon: '🔎',
    },
    {
      name: 'settings',
      isActive: false,
      icon: '⚙️',
    },
  ],
};

export const activityBarSlice = createSlice({
  name: 'activityBar',
  initialState,
  reducers: {
    deactivateActivityBar: (state) => {
      // const activityBarClone = JSON.parse(JSON.stringify(state.activityBar));
      const deactivatedActivityBar = state.activityBar.map(
        (activity: IActivity) => {
          return {
            ...activity,
            isActive: false,
          };
        }
      );
      state.activityBar = deactivatedActivityBar;
    },
    activateActivityBar: (state) => {
      const activatedActivityBar = state.activityBar.map(
        (activity: IActivity) => {
          return {
            ...activity,
            isActive: true,
          };
        }
      );
      state.activityBar = activatedActivityBar;
    },
  },
});

export const { activateActivityBar, deactivateActivityBar } =
  activityBarSlice.actions;
export const activityBarSliceReducer = activityBarSlice.reducer;
