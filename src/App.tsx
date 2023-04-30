import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import AboutUs from './routes/AboutUs/AboutUs';
import Form from './routes/Form/Form';
import MainLayout from './layouts/MainLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="stylesheet" type="text/css" href="index.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RS-School React App</title>
      </head>
      <body>
        <div id="app" className="container">
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
        </div>
      </body>
    </html>
  );
}

export default App;
