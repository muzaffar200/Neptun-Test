import './App.css';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Category from './components/main/Category';
import Main from './components/main/Main';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main/>} />
          <Route path="/category/:catId/:subId" element={<Category/>} />
        </Route>
      </Routes>
    </> 
  );
}

export default App;
