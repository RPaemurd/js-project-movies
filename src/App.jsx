import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Home />
    </>
    /* <Routes>  
      <Route path="/" element={<Home />}/> 
      <Route path="/movie/:id" element={<MovieDetail />} /> 
     </Routes> */
  )
};
