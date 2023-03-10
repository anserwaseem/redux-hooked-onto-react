import { useDispatch, useSelector } from 'react-redux';
import { doSet, doIncrement, doDecrement } from './actions';
import { SetCounter } from './SetCounter';
import { useActions } from './useActions';
import { useCounter } from './useCounter';
  

export const Counter = () => {
  const incident = 'Incident';
  const { count, doIncrement, doDecrement, doSet } = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => doIncrement()}>Increment</button>
        <button onClick={() => doSet(0)}>Reset</button>
        <button onClick={() => doDecrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
