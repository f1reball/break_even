
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

      <h1>price {price}</h1>
      <h1>quantity {quantity}</h1>

      <div className='inputWrapper'>
        <h1>Price: </h1>
        <Input stateController={setPrice} />
      </div>

      <div className='inputWrapper'>
        <h1>Quantity: </h1>
        <Input stateController={setQuantity} />
      </div>

      <h1>calc {calc}</h1>
    </div>
  );
}

export default App;
