import AlertComponent from './components/AlertComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
function App() {
  return (
    <div className="App">
      <AlertComponent />
      <AlertComponent textAlert="primary alert" colorAlert="primary" iconAlert="info-circle-fill"/>
      <AlertComponent textAlert="danger alert" colorAlert="danger" iconAlert="exclamation-triangle-fill"/>
      <AlertComponent textAlert="warning alert" colorAlert="warning" iconAlert="exclamation-triangle-fill"/>
      <AlertComponent textAlert="success alert" colorAlert="success" iconAlert="check-circle-fill"/>
      <AlertComponent textAlert="info alert" colorAlert="info" iconAlert="info-circle-fill"/>
      <AlertComponent textAlert="light alert" colorAlert="light" iconAlert="check-circle-fill"/>
      <AlertComponent textAlert="dark alert" colorAlert="dark" iconAlert="check-circle-fill"/>
    </div>
  );
}

export default App;
