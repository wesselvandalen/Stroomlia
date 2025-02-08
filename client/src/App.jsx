import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainview from './pages/mainview';
import Header from './components/header';
import TopAnnouncement from './components/top-announcement';
import ShoppingCartView from './pages/shopping-cart-view';
import ProductsView from './pages/products-view';
import ProductDetailView from './pages/products-detail-view';
import SpecialMessage from './components/special-message';
import SosView from './pages/sosview';
import ContactView from './pages/contactview';
import AboutView from './pages/aboutview';

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="top-announcement-container">
          <SpecialMessage/>
          <TopAnnouncement/>
          <Header />
        </div>
        <div className="routes-container">
          <Routes>
            <Route path={"/"} element={<Mainview />} />
            <Route path={"/handlekurv"} element={<ShoppingCartView />} />
            <Route path={"/produkter"} element={<ProductsView/>}/>
            <Route path={"/produkter/:productId"} element={<ProductDetailView/>}/>
            <Route path={"/sos"} element={<SosView/>}/>
            <Route path={"/kontakt"} element={<ContactView/>}/>
            <Route path={"/omoss"} element={<AboutView/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}