// * Contains Business Logic and returns view component
import React, { FC } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks/index'
import { updateCounterValue } from '@redux/slices/counterSlice/counter.actions'
import CounterView from '@components/Counter/view'

import './styles.scss'

export interface CounterProps {
  title?: string
}

const Counter: FC<CounterProps> = ({ title = 'Counter Compo' }) => {
  const counterValue = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <CounterView
      title={title}
      counterValue={counterValue}
      onIncrementPress={() => {
        dispatch(updateCounterValue('inc'))
      }}
      onDecrementPress={() => {
        dispatch(updateCounterValue('dec'))
      }}
    />
  )
}

export default Counter
