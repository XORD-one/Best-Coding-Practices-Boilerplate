import { setValue } from '.';
import { RootState } from '../../configureStore';
import {
  decrementCounterValue,
  incrementCounterValue,
} from './counter.helpers';

// an action
export const updateCounterValue =
  (type: string) => async (dispatch: any, getState: () => RootState) => {
    try {
      const store = getState();

      if (type === 'inc') {
        dispatch(setValue(incrementCounterValue(store.counter.value)));
      } else {
        dispatch(setValue(decrementCounterValue(store.counter.value)));
      }
    } catch (error) {
      console.error('Error: updateCounterValue() -', error);
    }
  };
