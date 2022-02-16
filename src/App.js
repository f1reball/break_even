
import { useState } from 'react';
import './App.css';
import Input from './components/input.js';

function App() {

  const [data, setData] = useState(null);

  return (
    <div className="App">
      <h1>{data}</h1>
      <Input stateController={setData} />
    </div>
  );
}

export default App;
