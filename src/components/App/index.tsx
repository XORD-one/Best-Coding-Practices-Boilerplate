import Counter from '@components/Counter';
import Stake from '@components/Stake';
import React, { FC } from 'react';
import './styles.scss';

type Props = Record<string, unknown>;

const App: FC<Props> = () => {
  return (
    <div className="app_container">
      <h4>Counter App</h4>
      <Counter />
      <Stake />
    </div>
  );
};

export default App;
