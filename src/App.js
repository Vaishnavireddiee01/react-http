import React from 'react';
//import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';


//how to make a get request and render fixed data in react cmpnt
//to fetch the data we need to have an API endpoint for that i will
//be making use of json placeholder *

function App() {
  return (
    <div className="App">
      {/*http get request*/}
      <PostList />
      {/*http post request*/}
      <PostForm />
    </div>
  );
}

export default App;
