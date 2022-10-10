import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Error from './pages/Error';
import Home from './pages/Home';
import Statistics from './pages/Statistics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/statistics' element={<Statistics></Statistics>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
