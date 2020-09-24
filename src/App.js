import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import {Route} from 'react-router-dom';



 
function App() {
  return (
    <div >
    
      <Route  exact path='/' component={Homepage}/>
    <Route path='/shop' component ={ShopPage}/>
    
      
    
    </div>
  );
}

export default App;
