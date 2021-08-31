import React from 'react';
import { decrement, increment } from '../store/counterSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const ReduxExample = () => {
  // NOTE: How to utilize selectCount.
  // const value = useSelector(selectCount);
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
