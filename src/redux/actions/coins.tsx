import { createAction } from 'redux-actions';
import { COINS } from '../types';

export const fetchAllCoins = createAction<number>(COINS.FETCH_COINS);