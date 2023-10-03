import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import ContactList from "./components/ContactList";
import ToDoListComponent from "./components/ToDoListComponent";

function App() {

  const tabPersons = [{
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
    <div className="container py-3">
      <ContactList persons={tabPersons}/>
      <ToDoListComponent />
    </div>
  );
}

export default App;
