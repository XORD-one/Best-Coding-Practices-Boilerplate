import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@redux/configureStore'
import { bindActionCreators } from '@reduxjs/toolkit'
import { ActionCreators } from '@redux/slices/counterSlice'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>() // eslint-disable-line
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(ActionCreators, dispatch)
}
