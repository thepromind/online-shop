import logo from './logo.svg';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';
import ProductInner from './pages/ProductInner';
import CatsInner from './pages/CatsInner';
import SubCatsInner from './pages/SubCatsInner';
import './design.css';
import './style.css';
import News from './pages/News';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <News/>
      {/* <Main/>
      <ProductInner/> */}
      <Footer/>
    </div>
  );
}

export default App;
