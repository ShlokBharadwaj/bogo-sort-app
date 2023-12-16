import React, { useState, useEffect } from 'react';

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [sorted, setSorted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-pacifico">
      <div className="text-4xl mb-4">bogo sort app</div>
    </div>
  );
}

export default App;
