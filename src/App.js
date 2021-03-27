import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import MainPage from './component/MainPage';
import MainPageContainer from './container/MainPageContainer';
import {SignIn} from './pages/Layout/sign-In/Sign-In'
import CustomerList from './pages/Layout/reception/CustomerList'

import {Reset} from './pages/Layout/sign-In/Reset'

// import 'bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { MailOutline } from '@material-ui/icons';

function App() {
  return (
    <div>


<Router>


<Switch>


<Route path='/customerList'>
<MainPageContainer/>
</Route>
<Route path="/addCustomer">
<MainPageContainer/>
</Route>

  <Route path="/reception">
<MainPageContainer/>
  </Route>
</Switch>


<Switch>
  <Route path="/reset" >
<Reset/>
  </Route>


  <Route exact path="/" >
<SignIn/>
  </Route>

</Switch>

</Router>


      {/* <BrowserRouter>      
        <MainPageContainer/>

      </BrowserRouter> */}
    </div>
  );
}

export default App;
