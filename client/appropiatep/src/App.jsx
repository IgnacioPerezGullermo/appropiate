import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { background, Box } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Box bg={'brand.900'} p={'paddings.100'}>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Box>
      <h1>Appropiate Chile</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
