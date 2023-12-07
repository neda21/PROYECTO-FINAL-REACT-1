
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ContenedorTarjetas from './components/ContenedorTarjetas/ContenedorTarjetas';
import Login from './components/Login/Login';
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
   <Navbar />
   <Routes>              
   <Route path="/" element ={<Login />}/>
   <Route path="/tarjetas" element ={<ContenedorTarjetas />}/>
   </Routes>
   
   <Footer />

   </>
  );

  
}


export default App
