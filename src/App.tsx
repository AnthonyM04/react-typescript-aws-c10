import { Hello } from './components/Hello';
import './App.css';
import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName='Anthony' lastName='Murphy'/>
        <Form />
      </header>
    </div>
  );
}

export default App;
