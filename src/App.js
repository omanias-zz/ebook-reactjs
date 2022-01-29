import Header from "./Header";
import Home from "./Home";
import Carrito from "./Carrito";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "./miContexto";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
