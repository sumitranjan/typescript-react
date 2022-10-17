import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Anish",
    last: "Patel ",
  };
  const nameList = [
    {
      first:"Sumit",
      last:"Ranjan"
    },
    {
      first:'Rohit',
      last:'Kumar'
    },
    {
      first:'Sushil',
      last:'Kumar'
    }

  ]
  return (
    <div className="App">
      <Greet name="Sumit" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
