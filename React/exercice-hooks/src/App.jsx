import WelcomeComponent from "./components/WelcomeComponent";
import WelcomeComponentClass from "./components/WelcomeComponentClass";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="container my-2">
      <WelcomeComponent/>
      <WelcomeComponentClass/>
    </div>
  );
}

export default App;
