import logo from './logo.svg';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';
import ProductInner from './pages/ProductInner';
import CatsInner from './pages/CatsInner';
import SubCatsInner from './pages/SubCatsInner';
import Basket from './pages/Basket';
import './design.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      {/* <Main/> */}
      {/* <ProductInner/> */}
      {/* <CatsInner/> */}
      {/* <SubCatsInner/> */}
      <Basket/>
      
      <Footer/>
    </div>
  );
}

export default App;
