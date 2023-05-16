import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const coffees = useLoaderData();

  const [allCoffees, setAllCoffees] = useState(coffees);

  return (
    <div className="m-20">
      <h1 className="text-6xl text-purple-600 text-center">Hot & Cold Coffees</h1>
      <div className="grid md:grid-cols-2 gap-2">
        {
          allCoffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffee={coffee} 
            allCoffees={allCoffees} 
            setAllCoffees={setAllCoffees} />)
        }
      </div>
    </div>
  )
}

export default App;
