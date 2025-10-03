import React from 'react';
import '@fontsource/roboto';
import theme from './assets/theme';
import { ThemeProvider } from '@mui/material';
import Hero from './components/Hero';
import Coffee from './components/Coffee';
import AddNewItem from './components/AddNewItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from './components/Order';
import { CartProvider } from './components/CartContext';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <CartProvider> 
        <Router>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Coffee />
                    </>
                  }
                />
                <Route path="/newitem" element={<AddNewItem />} />
                <Route path="/orders" element={<Order />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </Router>
      </CartProvider>
    </>
  )
}

export default App;