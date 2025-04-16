import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';

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
