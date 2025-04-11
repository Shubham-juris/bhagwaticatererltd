import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/Footer/Footer';
import Pageroutes from './routes/Pageroutes';


function App() {
  return (
    <>
      <Navbar/>
      <Pageroutes/>
      <Footer/>
    </>
  );
}

export default App;
