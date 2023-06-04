import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import AboutUs from './routes/AboutUs/AboutUs';
import Form from './routes/Form/Form';
import MainLayout from './layouts/MainLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HtmlLayout from './layouts/HtmlLayout';

function App() {
  return (
    <HtmlLayout>
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
    </HtmlLayout>
  );
}

export default App;
