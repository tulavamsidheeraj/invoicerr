import { useState } from "react";

const BOM = ({ items, setItems }) => {
  const [itemName, setItemName] = useState('');
  const [qty, setQty] = useState('');
  const [cost, setCost] = useState('');

  // The function to handle adding a new item
  const handleAddItem = () => {
    // Check if all fields have values before adding
    if (itemName && qty && cost) {
      const newItem = {
        itemName: itemName,
        itemCost: parseFloat(cost), // Convert cost to a number
        itemQty: parseInt(qty),     // Convert quantity to an integer
      };
      
      // Correctly update the items state by creating a new array
      // with all previous items and the new item.
      setItems([...items, newItem]);

      // Clear the input fields after adding the item for a better user experience
      setItemName('');
      setQty('');
      setCost('');
    }
  };

  return (
    <div className='flex items-end'>
      <div className='m-1'>
        <div>Item name</div>
        <input 
          type="text" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)} 
          className='p-2 border border-gray-800 rounded h-auto' 
          placeholder='e.g., Laptop' 
        />
      </div>
      <div className='m-1'>
        <div>Cost</div>
        <input 
          type="number" 
          min="0" 
          value={cost} 
          onChange={(e) => setCost(e.target.value)} 
          className='p-2 border border-gray-800 rounded h-auto' 
          placeholder='e.g., 1200' 
        />
      </div>
      <div className='m-1'>
        <div>Quantity</div>
        <input 
          type="number" 
          min="0" 
          value={qty} 
          onChange={(e) => setQty(e.target.value)} 
          className='p-2 border border-gray-800 rounded h-auto' 
          placeholder='e.g., 1' 
        />
      </div>
      <div className='m-1'>
        <button 
          className='border bg-indigo-400 p-2 rounded text-white' 
          onClick={handleAddItem}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BOM;