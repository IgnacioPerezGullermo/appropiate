import { ChakraProvider } from '@chakra-ui/react';
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
import { NavBar } from './components/NavBar';
import store from './redux/store';
import { theme } from './styles/theme';
import { Appointment } from './views/Appointment';
import { Blog } from './views/Blog';
import { BrokerDashboard } from './views/BrokerDashboard';
import { Dashboard } from './views/dashboard';
import { Home } from './views/Home';
import { Landing } from './views/Landing';
import { LogIn } from './views/LogIn';
import { Profile } from './views/profile';
import { Register } from './views/Register';
import { Services } from './views/Services';

const dotenv = require('dotenv');
dotenv.config();

axios.defaults.baseURL = process.env.BASE_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/home" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/brokerdashboard" element={<BrokerDashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
