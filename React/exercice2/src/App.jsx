import "bootstrap/dist/css/bootstrap.min.css"
import ContactList from "./components/ContactList";

function App() {

  const tabPerson = [{
    id: 1,
    firstname: "John",
    lastname: "Doe"
  }, {
    id: 2,
    firstname: "Jack",
    lastname: "Sparrow"
  }, {
    id: 3,
    firstname: "Will",
    lastname: "Smith"
  }, {
    id: 4,
    firstname: "Luc",
    lastname: "Skywalker"
  }]

  return (
    <div className="App">
      <ContactList persons={tabPerson}/>
    </div>
  );
}

export default App;
