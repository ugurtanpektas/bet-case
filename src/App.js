import React, { useState, useEffect } from 'react';
import BetsTable from './components/BetsTable';
import Cart from './components/Cart';
import { BetProvider } from './contexts/BetContext';
import './App.css';

function App() {
  const [bets, setBets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://nesine-case-study.onrender.com/bets')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setBets(data);
        }
        setLoading(false);
      });
  }, []);

  return (
    <BetProvider>
      <div className="App">
        {loading ? <div>Loading...</div> : <BetsTable bets={bets} />}
        <Cart />
      </div>
    </BetProvider>
  );
}

export default App;
