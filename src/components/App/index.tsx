import Counter from '@components/Counter';
import { FC } from 'react';

import './styles.scss';

type Props = {};

const App: FC<Props> = () => {
  return (
    <div className="app_container">
      <h4>Counter App</h4>
      <Counter />
    </div>
  );
};

export default App;
