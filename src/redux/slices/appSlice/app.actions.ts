import { setValue } from '.';
import { RootState } from '../../configureStore';
import {
  getRandomNumber
} from './app.helpers';

// an action
export const updateAppValue =
  (type: string) => async (dispatch: any, getState: () => RootState) => {
    try {
      // store
      const store = getState();

      dispatch(setValue(getRandomNumber()))
    } catch (error) {
      console.error('Error: updateAppValue() -', error);
    }
  };
