import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Lee",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Lee",
    },
    {
      first: "Jack",
      last: "Pac",
    },
    {
      first: "Leo",
      last: "Tom",
    },
    {
      first: "Solo",
      last: "Ip",
    },
  ];

  return (
    <div className="App">
      <Greet name="Abraham" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
