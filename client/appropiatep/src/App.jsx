import {
  ChakraProvider,
  ColorModeScript,
  CSSReset,
  useDisclosure,
} from '@chakra-ui/react';
import '@fontsource/playfair-display';
import '@fontsource/source-sans-pro';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { PasswordUpdate } from './components/PasswordUpdate/PasswordUpdate';
import { PropiertyDetail } from './components/PropiertyDetail/PropiertyDetail';
import { UserDrawer } from './components/UserDrawer/UserDrawer';
import { VerifyAccount } from './components/VerifyAccount/VerifyAccount';
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

export const App = () => {
  const [Logged, setLogged] = React.useState(false);
  const [Location, setLocation] = React.useState('');
  const [PreviousPath, setPreviousPath] = React.useState('');
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <div className="App">
            <BrowserRouter>
              <UserDrawer
                isOpen={isOpen}
                onClose={onClose}
                setLogged={setLogged}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Landing onOpen={onOpen} setLocation={setLocation} />
                  }
                />
                <Route
                  path="/dashboard"
                  element={<Dashboard setLocation={setLocation} />}
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route
                  path="/login"
                  element={
                    <LogIn
                      setLocation={setLocation}
                      PreviousPath={PreviousPath}
                      setPreviousPath={setPreviousPath}
                    />
                  }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/brokerdashboard" element={<BrokerDashboard />} />
                <Route
                  path="/displaypropierty"
                  element={
                    <DisplayPropierty isOpen={isOpen} onClose={onClose} />
                  }
                />
                <Route
                  path="/propierty/:id"
                  element={<PropiertyDetail onOpen={onOpen} />}
                />
                <Route path="/verification" element={<VerifyAccount />} />
                <Route path="/resetpassword" element={<PasswordUpdate />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
};
