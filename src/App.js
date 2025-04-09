import React from 'react';
//import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';


//how to make a get request and render fixed data in react cmpnt
//to fetch the data we need to have an API endpoint for that i will
//be making use of json placeholder *

function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
