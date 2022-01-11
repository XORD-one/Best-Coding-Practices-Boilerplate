import { setValue } from '.';
import { RootState } from '../../configureStore';
import {
  getRandomNumber
} from './auth.helpers';

// an action
export const updateAuthValue =
  (type: string) => async (dispatch: any, getState: () => RootState) => {
    try {
      // store
      const store = getState();

      dispatch(setValue(getRandomNumber()))
    } catch (error) {
      console.error('Error: updateAuthValue() -', error);
    }
  };
