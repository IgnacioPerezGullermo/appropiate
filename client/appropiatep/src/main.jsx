import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
import { theme } from './theme';
import { Landing } from './views/Landing';
import { Dashboard } from './views/dashboard';
import { Profile } from './views/profile';
import { Services } from './views/Services';
import { NavBar } from './components/NavBar';
import { Home } from './views/Home';
import { Blog } from './views/Blog';
import { Appointment } from './views/Appointment';
import { LogIn } from './views/LogIn';
import { Register } from './views/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
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
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
