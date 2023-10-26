import Form from './components/Form';
import Groceries from './components/Groceries';

import { useState } from 'react';
function App() {

  const [input, setInput] = useState<string>('');
  const [groceries, setGroceries] = useState<{ name: string, id: number }[]>([]);

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    if (groceries.length === 0) {
      const newItem = {
        id: 1,
        name: input
      }
      setGroceries(prev => [...prev, newItem]);
      setInput('');
    } else {
      const newItem = {
        id: groceries[groceries.length - 1].id + 1,
        name: input
      }
      setGroceries(prev => [...prev, newItem]);
      setInput('');
    }



  }

  return (
    <main className="app">
      <h1 className="title">Grocery Bud</h1>
      <Form
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
      <Groceries
        groceries={groceries}
      />
    </main>
  );
}

export default App;
