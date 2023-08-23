import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Header title="Hello" />
      <Section title="Section title">this is Child</Section>
      <Counter setCount={setCount} children={`Count is ${count}`} />
      <List
        items={["Coffee", "Chilli", "Code"]}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
