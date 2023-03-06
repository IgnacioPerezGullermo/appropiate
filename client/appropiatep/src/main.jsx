import '@fontsource/playfair-display';
import '@fontsource/source-sans-pro';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import { App } from './App';

//dotenv.config();

//axios.defaults.baseURL = process.env.BASE_URL || 'https://localhost:3001';
axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL || 'http://localhost:3001';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
