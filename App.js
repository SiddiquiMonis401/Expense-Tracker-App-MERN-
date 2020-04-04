import React from 'react';
import './App.css';
import ExpenseCard from './Components/ExpenseCard';
import {ContextProvider} from './Context';
function App() {
  return (
    <div className="App">
      <ContextProvider>
       <h1>Expense App</h1>
        <ExpenseCard />

      </ContextProvider>
    </div>
  );
}

export default App;
