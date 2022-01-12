import { useAppDispatch, useAppSelector } from '@hooks/index'
import { updateCounterValue } from '@redux/slices/counterSlice/counter.actions'
import React, { FC } from 'react'
import images from '@assets/'
import './styles.scss'
// import './styles.css';

type Props = Record<string, unknown>

const Counter: FC<Props> = () => {
  const counterValue = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="container">
      <img src={images.NFTImage} />
      <button onClick={() => dispatch(updateCounterValue('inc'))}>
        Increment
      </button>
      <button onClick={() => dispatch(updateCounterValue('dec'))}>
        Decrement
      </button>
      <p>counterValue = {counterValue}</p>
    </div>
  )
}

export default Counter
