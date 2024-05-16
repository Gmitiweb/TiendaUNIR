import './App.css';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Storerouter from './router/Storerouter'

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Storerouter></Storerouter>
       
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
