import React, { Component } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import AboutUs from './routes/AboutUs/AboutUs';
import NavBar from './routes/NavBar/NavBar';
import Form from './routes/Form/Form';

const router = createBrowserRouter([
  {
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <div>
            <Home />
          </div>
        ),
      },
      {
        path: '/form',
        element: (
          <div>
            <Form />
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
    ],
  },
  {
    path: '*',
    element: (
      <>
        <NotFound />
      </>
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
