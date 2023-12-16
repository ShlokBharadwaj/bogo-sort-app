import React, { useState, useEffect } from 'react';

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    if (!sorted) {
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const isSorted = (array) => {
        for (let i = 0; i < array.length - 1; i++) {
          if (array[i] > array[i + 1]) {
            return false;
          }
        }
        return true;
      };

      const sortArray = () => {
        const newArray = [...inputArray];
        const sortedArray = shuffleArray(newArray);
        setInputArray(sortedArray);
        setSorted(isSorted(sortedArray));
      };

      const sortInterval = setInterval(sortArray, 10);
      return () => clearInterval(sortInterval);
    }
  }, [inputArray, sorted]);

  const handleInputChange = (e) => {
    const newArray = e.target.value
      .split(' ')
      .map((item) => parseInt(item, 10))
      .filter((item) => !isNaN(item));
    setInputArray(newArray);
    setSorted(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-pacifico">
      <div className="text-4xl mb-4">bogo sort app</div>
      <textarea
        className="w-full h-16 p-2 mb-4 border-red-500 focus:border-blue-500 transition-all duration-300"
        placeholder="Enter numbers separated by space"
        onChange={handleInputChange} autoFocus
      ></textarea>
      <div className="flex space-x-2">
        {inputArray.map((element, index) => {
          if (isNaN(element)) {
            return null;
          }

          return (
            <div
              key={index}
              className={`w-8 h-8 border ${sorted ? 'border-green-500' : 'border-red-500'} transition-all duration-300`}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
