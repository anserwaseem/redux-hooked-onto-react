import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActions = (actions, deps) => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch, Array.isArray(deps) ? [...deps] : deps]);
};
