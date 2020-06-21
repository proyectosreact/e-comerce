import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Landing from './views/Landing/index'
import Categoria from './views/Categoria/index'
import Products from './views/Products/index'
import SignIn from './views/SignIn/index'
import SignUp from './views/SignUp/index'
import Vistaprincipal from './views/Vistaprincipal';

function App() {
  return (
     <Router>
       <Switch>
         <Route path="/" component={Landing} exact></Route>
         <Route path="/signUp" component={SignUp} />
         <Route path="/signIn" component={SignIn} />
         <Route path="/categoria/:id" component={Categoria} exact></Route>
         <Route path="/products" component={Products} exact></Route>
         <Route path="/Vistaprincipal" component={Vistaprincipal} exact></Route>
       </Switch>
     </Router>

  );
}

export default App;
