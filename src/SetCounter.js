import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doSet } from './actions';

export const SetCounter = () => {
  const stateFromStore = useSelector((state) => state.count);
  const [count, setCount] = useState(stateFromStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(stateFromStore);
  }, [stateFromStore]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(doSet(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
