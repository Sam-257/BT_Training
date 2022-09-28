import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TodoList from './Components/TodoList';
import Form from './Components/Form';
import Login from './Components/Login';
import Demo from './Components/Demo';
import Movie from './Components/Movie';
import {moviesList} from './Data/movies'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/movie" element={<Movie moviesList={moviesList} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
