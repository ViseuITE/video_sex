import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import AddPost from './pages/post/AddPost';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/post" element={<AddPost/>} />
        </Routes>
      </DefaultLayout>

      <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/post" element={<AddPost/>} /> */}
        </Routes>
    </>
  );
}

export default App;
