import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from './theme-provider';

function App() {
  return (
    <div>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
