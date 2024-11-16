import  { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer'
import userRoutes from './routes/UserRoutes';
import productRoutes from './routes/ProductRoutes';
import otherRoutes from './routes/OtherRoutes';
import './App.css'; // Import your custom CSS

const App = () => {
  const allRoutes = [...userRoutes, ...productRoutes, ...otherRoutes];



  return (
    <div className='app'>
      <Navbar />
      <Offer/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {allRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
