import { ChangeEvent, ReactNode, useReducer } from "react";

const initState = { count: 0, text: "" };

const enum REDUCER_ACRION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACRION_TYPE;
  payload?: string;
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACRION_TYPE.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case REDUCER_ACRION_TYPE.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case REDUCER_ACRION_TYPE.NEW_INPUT:
      return {
        ...state,
        text: action.payload ?? "",
      };
    default:
      throw new Error();
  }
};

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: REDUCER_ACRION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACRION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACRION_TYPE.NEW_INPUT, payload: e.target.value });
  };
  return (
    <div>
      <h1>Component's Counter</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={handleTextInput} />
      {state.count}
      {state.text}
      <hr />
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default Counter;
