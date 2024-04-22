
// import Navbar from './lentra/Navbar'
// import LogIn from './myproject/LogIn';
// import Login1  from './Prroject/Form/Login1';
// import Modal from './myproject/Modal';
import Mainn from './practice/mainn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formfirst from './CrudOpration/Create'
import Read from './CrudOpration/Read'
import Update  from './CrudOpration/Update';

function App() {
  return (
    <>
      {/* <Nav/> 
  <Modal/> */}
      {/* <Login/> */}
      {/* <Homepage/>
  <Login1/> */}
      {/* <Header /> */}
      {/* <LogIn/>
  <Navbar/>
  <SearchBar/>
  <Prrops/> */}
          <Mainn />



          {/* <BrowserRouter>
          <Routes>
              <Route exact path='/' element={ <Formfirst/>} />
              <Route  path='/Read' element={ <Read/>} />
              <Route  path='/Update' element={ <Update/>} />
          </Routes>
          </BrowserRouter> */}
    </>
  );
}


export default App;
