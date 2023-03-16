import React, { Component } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import AboutUs from './routes/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: '/aboutus',
    element: (
      <div>
        <AboutUs />
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div>
        <NotFound />
      </div>
    ),
  },
]);

class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
