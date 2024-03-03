import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/pages/Home';


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
