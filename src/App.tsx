import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import AboutUs from './routes/AboutUs/AboutUs';
import NavBar from './components/NavBar/NavBar';
import Form from './routes/Form/Form';
import MainLayout from './layouts/MainLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
