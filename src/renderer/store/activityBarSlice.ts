import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActivity, IActivityBar } from '../types';

const initialState: IActivityBar = {
  activityBar: [
    {
      name: 'explorer',
      isActive: false,
      icon: '📁',
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
    enableActivity: (state, action: PayloadAction<string>) => {
      // NOTE: Deep clone an object.
      // const activityBarClone = JSON.parse(JSON.stringify(state.activityBar));
      const updatedActivityBar = state.activityBar.map(
        (activity: IActivity) => {
          return {
            ...activity,
            isActive: activity.name === action.payload ? true : false,
          };
        }
      );
      state.activityBar = updatedActivityBar;
    },
  },
});

export const { enableActivity } = activityBarSlice.actions;
export const activityBarSliceReducer = activityBarSlice.reducer;
