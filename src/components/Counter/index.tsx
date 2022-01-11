import { useAppDispatch, useAppSelector } from '@hooks/index';
import { updateCounterValue } from '@redux/slices/counterSlice/counter.actions';
import { FC } from 'react';

import './styles.scss';
// import './styles.css';

type Props = {};

const Counter: FC<Props> = () => {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <button onClick={() => dispatch(updateCounterValue('inc'))}>
        Increment
      </button>
      <button onClick={() => dispatch(updateCounterValue('dec'))}>
        Decrement
      </button>
      <p>counterValue = {counterValue}</p>
    </div>
  );
};

export default Counter;
