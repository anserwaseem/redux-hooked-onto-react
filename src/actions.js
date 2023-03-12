export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET = 'SET';

export const doIncrement = () => ({ type: INCREMENT });
export const doDecrement = () => ({ type: DECREMENT });
export const doSet = (value) => ({ type: SET, payload: value });
