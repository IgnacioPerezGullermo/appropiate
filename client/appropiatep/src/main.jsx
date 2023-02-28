import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '@fontsource/playfair-display';
import '@fontsource/source-sans-pro';
import axios from 'axios';
import dotenv from 'dotenv';
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
import { NavBar } from './components/NavBar';
import store from './redux/store';
import './styles/main.css';
import { theme } from './styles/theme';
import { Appointment } from './views/Appointment';
import { Blog } from './views/Blog';
import { BrokerDashboard } from './views/BrokerDashboard';
import { Dashboard } from './views/Dashboard';
import { DisplayPropierty } from './views/DisplayPropierty';
import { Home } from './views/Home';
import { Landing } from './views/Landing';
import { LogIn } from './views/LogIn';
import { Profile } from './views/Profile';
import { Register } from './views/Register';
import { Services } from './views/Services';

//dotenv.config();

//axios.defaults.baseURL = process.env.BASE_URL || 'https://localhost:3001';
axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL || 'http://localhost:3001';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
