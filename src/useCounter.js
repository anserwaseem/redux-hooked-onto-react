import { useActions } from './useActions';
import { doIncrement, doDecrement, doSet } from './actions';
import { useSelector } from 'react-redux';

export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ doIncrement, doDecrement, doSet });

  return { count, ...actions };
};
