import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;
// TODO: Figure out the difference between the two declarations.
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
