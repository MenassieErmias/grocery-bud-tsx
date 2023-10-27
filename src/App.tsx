import Form from './components/Form';
import Groceries from './components/Groceries';

import { useState } from 'react';
function App() {

  const [input, setInput] = useState<string>('');
  const [groceries, setGroceries] = useState<{ name: string, id: number }[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<number>(0);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.length === 0) {
      return;
    }
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

  const handleDelete = (id: number) => {
    const filteredGroceries = groceries.filter((grocery) => grocery.id !== id);
    setGroceries(filteredGroceries);
  }

  const handleClear = () => {
    setGroceries([]);
  }

  const handleEdit = (id: number) => {
    const groceriesWithout = groceries.filter((grocery) => grocery.id !== id);
    const editedGrocery = {
      id: id,
      name: input
    }

    setGroceries([...groceriesWithout, editedGrocery]);
    setEditMode(false);
  }

  return (
    <main className="app">
      <h1 className="title">Grocery Bud</h1>
      <Form
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        editMode={editMode}
        handleEdit={handleEdit}
        editId={editId}
      />
      <Groceries
        groceries={groceries}
        handleDelete={handleDelete}
        handleClear={handleClear}
        setEditMode={setEditMode}
        setEditId={setEditId}
      />
    </main>
  );
}

export default App;
