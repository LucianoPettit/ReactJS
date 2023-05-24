import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import Nosotros from "./etx/hoc/Nosotros";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Contacto from './components/Contacto/Contacto';
import AppRouter from './router/AppRouter';


function App() {
  return (
    

      <CartProvider>
        <AppRouter />
      </CartProvider>
  
  );
}

export default App;
