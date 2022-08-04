import './App.css';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ComoComprar from './components/ComoComprar';
import Header from './components/Header';

import Footer from './components/Footer';



function App() {
  return (
    <>
    <BrowserRouter>
     
      <Routes>
      <Route path="/" element={<Header />}/>
      <Route path = '/productos' element = {<ItemListContainer/>} />
      <Route path="/comocomprar" element={<ComoComprar/>}/>
    
      <Route path = '*' element = {<Header/>} />
      <Route path = '/species/*' element = {<Header/>} />
      
      
      </Routes>
      <Footer/>
      </BrowserRouter>  
    </>

  );
}

export default App;
