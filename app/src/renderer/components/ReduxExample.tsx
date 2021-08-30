import React from 'react';
import { decrement, increment } from '../redux/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const ReduxExample = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full place-items-center justify-center space-x-2 m-2">
      <div className="border p-2 rounded" onClick={() => dispatch(decrement())}>
        --
      </div>
      <div>{value}</div>
      <div className="border p-2 rounded" onClick={() => dispatch(increment())}>
        ++
      </div>
    </div>
  );
};

export { ReduxExample };
