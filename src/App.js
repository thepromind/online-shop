import logo from './logo.svg';
import Header from './Header/Header';
import Nav from './components/Nav';
import Main from './pages/Main';
import ProductInner from './pages/ProductInner';
import './design.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      {/* <Main/> */}
      <ProductInner/>
    </div>
  );
}

export default App;
