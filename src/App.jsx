import React, { useState, useEffect } from 'react';

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    let sortInterval;

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

      sortInterval = setInterval(sortArray, 1000);
    }

    return () => clearInterval(sortInterval);
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
      <div className='w-3/4 flex flex-col items-center justify-center m-0'>
        <h3 className='text-white mt-3 mb-5 text-center'>Enter all the numbers separated by space(' ').
        </h3>
        <textarea
          className="rounded-lg font-[75px] h-32 w-24 border-solid border-[#eee] m-[1%] text-center text-white focus:outline-none pt-11 px-3 overflow-hidden bg-gray-800 resize-none"
          onChange={handleInputChange}
          autoFocus
        ></textarea>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {inputArray.map((element, index) => {
          if (isNaN(element)) {
            return null;
          }
          return (
            <div
              key={index}
              className={`flex items-center justify-center min-w-8 min-h-4 border ${sorted ? 'border-green-500' : 'border-red-500'} transition-all duration-300 m-2 rounded-lg p-4`}
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
