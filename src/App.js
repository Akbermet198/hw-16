import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Products from "./pages/Products";
import MyOrders from "./pages/MyOrders";
import MyCart from "./pages/MyCart";
import Page1 from "./pages/Page1";
import Logo from "./pages/Logo";
import Pagetwo from "./pages/Pagetwo";




function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/logo" element={<Logo/>}/>
        {/* <Route path="/" /> */}
        <Route path="/product" element={<Products/>}/>
        <Route path="/product/:nameId" element={<Page1/>}/> 
        <Route path="/product/:nameId" element={<Pagetwo/>} /> 
      
       

          <Route path="/myorder" element={<MyOrders />} />
          <Route path="/mycard" element={<MyCart />} />

        
      

      </Routes>
    </div>
  );
}

export default App;
