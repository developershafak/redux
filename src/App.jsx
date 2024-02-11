// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// // Create a context
// const DataContext = React.createContext();

// // Create a provider component
// const DataProvider = ({ children }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://api.publicapis.org/entries');
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const createData = async (newData) => {
//     try {
//       const response = await axios.post('https://api.publicapis.org/entries', newData);
//       setData([...data, response.data]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const updateData = async (id, updatedData) => {
//     try {
//       const response = await axios.put(`https://api.publicapis.org/entries/${id}`, updatedData);
//       const updatedList = data.map((item) => (item.id === id ? response.data : item));
//       setData(updatedList);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteData = async (id) => {
//     try {
//       await axios.delete(`https://api.publicapis.org/entries/${id}`);
//       const updatedList = data.filter((item) => item.id !== id);
//       setData(updatedList);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <DataContext.Provider value={{ data, createData, updateData, deleteData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// // Use the provider in your app
// const App = () => {
//   return (
//     <DataProvider>
//       {/* Your app components */}
//     </DataProvider>
//   );
// };

// export default App;
// import React from 'react';
// import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';

// // Define the initial state
// const initialState = {
//   count: 0
// };


// // Define the reducer function
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1
//       };
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// };

// // Create the Redux store
// const store = createStore(reducer);

// // Define the component
// const Counter = ({ count, increment, decrement }) => {
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// // Map the state and dispatch to props
// const mapStateToProps = state => ({
//   count: state.count
// });

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch({ type: 'INCREMENT' }),
//   decrement: () => dispatch({ type: 'DECREMENT' })
// });


// // Connect the component to the Redux store
// const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);


// // Render the component
// const App = () => {
//   return (
//     <Provider store={store}>
//       <ConnectedCounter />
//     </Provider>
//   );
// };


// export default App;




import React from 'react'
import Home from './Components/Home'

const App = () => {
  
  return (
    <>
      <Home/>
    </>)
}

export default App