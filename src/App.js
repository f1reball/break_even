
import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/input.js';

function App() {

  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [calc, setCalc] = useState(null);


  useEffect(() => {
    setCalc(price * quantity);
  }, [price, quantity])


  return (
    <div className="App">

      <h1>{price}</h1>
      <Input stateController={setPrice} />
      <h1>{quantity}</h1>
      <Input stateController={setQuantity} />

      <h1>hello {calc}</h1>
    </div>
  );
}

export default App;
