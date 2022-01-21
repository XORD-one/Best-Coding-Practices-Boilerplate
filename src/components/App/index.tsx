import React, { FC } from 'react'

import Counter, { CounterProps } from '@components/Counter'
import JestDemo from '@components/JestDemo'
import Stake from '@components/Stake'

import './styles.scss'

type Props = Record<string, unknown>

const App: FC<Props> = () => {
  const counterProps: CounterProps = {
    title: 'Counter',
  }

  return (
    <div className="app_container">
      <h4>Counter App</h4>
      <Counter {...counterProps} />
      <Stake />
      <JestDemo id="2" />
    </div>
  )
}

export default App
