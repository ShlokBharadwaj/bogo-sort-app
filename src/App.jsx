import React, { useState, useEffect } from 'react';

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [sorted, setSorted] = useState(false);

  const handleInputChange = (e) => {
    const newArray = e.target.value.split(' ').map((item) => parseInt(item, 10));
    setInputArray(newArray);
    setSorted(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-pacifico">
      <div className="text-4xl mb-4">bogo sort app</div>
      <textarea
        className="w-full h-16 p-2 mb-4 border-red-500 focus:border-blue-500 transition-all duration-300"
        placeholder="Enter numbers separated by space"
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
}

export default App;
