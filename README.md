# bogo-sort-app

An implementation of the Bogo Sort algorithm in React.

## Overview

Bogo Sort is a highly inefficient sorting algorithm that generates random permutations of the input array and checks if it is sorted. It continues this process until the array is sorted. The app provides a visual representation of the sorting process, along with additional information about the number of iterations and time complexity.

## Getting Started

### Clone the Repository

```
git clone git@github.com:ShlokBharadwaj/bogo-sort-app.git
```

### Install Dependencies

```
cd bogo-sort-app
npm install
```

### Run app Locally

```
npm run dev
```

Open your browser and go to http://localhost:5173/bogo-sort-app/ to view the application.

## Usage

1. Enter a list of numbers separated by space in the textarea.
2. Observe the animated sorting process.
3. View information about the sorting process, including the number of iterations and time complexity.

## Customization

### Update Sorting Interval

You can customize the sorting interval in the `App.jsx` file. Locate the `sortInterval` declaration and modify the interval duration as needed.

```
sortInterval = setInterval(sortArray, 1000); // Change the interval duration (in milliseconds)
```

## Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS

## Issues and Contributions

Feel free to open an issue if you encounter any problems or have suggestions for improvements. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.