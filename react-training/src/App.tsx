import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TodoList from './Components/TodoList';
import Form from './Components/Form';
import Login from './Components/Login';
import Demo from './Components/Demo';
import Movie from './Components/Movie';
import {moviesList} from './Data/movies'
import UseRefDemo from './Components/UseRefDemo';
import UseCallback from './Components/UseCallbackDemo/UseCallBackDemo';
import UseMemoDemo from './Components/UseMemoDemo';
import Layout from './Components/Layout';
import Comments from './Components/ApiDemo/Comments';
import Auth from './Components/ApiDemo/Auth';

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
        <Route path="/useRef" element={<UseRefDemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useMemo" element={<UseMemoDemo />} />
        <Route path="/customHook" element={<Layout />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/secure" element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
