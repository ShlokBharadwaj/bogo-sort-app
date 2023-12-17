import React, { useState, useEffect } from 'react';

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [iterations, setIterations] = useState(0);
  const [timeComplexity, setTimeComplexity] = useState('');

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
        setIterations(prevIterations => prevIterations + 1);
        const factorial = (num) => {
          if (num === 0 || num === 1) return 1;
          return num * factorial(num - 1);
        };
        setTimeComplexity(`Time Complexity: O(${factorial(sortedArray.length)})`);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#041f1e] text-white font-pacifico">
      <div className="text-4xl mb-4">bogo sort app</div>
      <div className='w-3/4 flex flex-col items-center justify-center m-0'>
        <h3 className='text-white mt-3 mb-5 text-center'>Enter all the numbers separated by space(' ').<br />
          {sorted && iterations > 1 ? `Array sorted in ${iterations - 1} iterations.` : ''} <br />
          {timeComplexity && sorted && iterations > 1 ? timeComplexity : ''} <br />
          {sorted && iterations > 1 ? `Bogo Sort is a highly inefficient sorting algorithm that generates random permutations
          of the input array and checks if it is sorted. It continues this process until the array
          is sorted.` : ``}
        </h3>
        <textarea
          className="rounded-lg font-[75px] h-32 w-24 border-solid border-[#eee] m-[1%] text-center text-white focus:outline-none pt-11 px-3 overflow-hidden bg-[#1e2d2f] resize-none mb-10"
          onChange={handleInputChange}
          autoFocus
        ></textarea>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {inputArray.map((element, index) => {
          if (isNaN(element)) {
            return null;
          }
          return (
            <div
              key={index}
              className={`rounded-lg font-[75px] h-32 w-24 m-[0%] text-center text-white focus:outline-none pt-12 px-3 overflow-hidden bg-[#1e2d2f] ${sorted ? 'border border-solid border-green-500' : 'border border-solid border-red-500'} transition-all duration-300 m-4`}
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
