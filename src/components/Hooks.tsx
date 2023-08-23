import {
  useCallback,
  useState,
  MouseEvent,
  KeyboardEvent,
  useRef,
  useMemo,
  useEffect,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFun = (n: number) => number;

const fib: fibFun = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum = 12;

const Hooks = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addCount = useCallback(
    (
      _e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <div>
      <h1>Hooks</h1>
      <h2>{count}</h2>
      <button onClick={addCount}>add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default Hooks;
