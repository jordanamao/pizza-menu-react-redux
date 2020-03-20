import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Contact from './Contact';
import Order from './Order';
import Sauce from './Sauce';
import Toppings from './Toppings'
import Home from './Home';


//contains the router links

class Links extends Component {
  
  render(){
    return(

      <Router>
        <div class="ui grid">
          <div class="four wide column">
            <div class="ui fluid vertical tabular menu">
              <a class="active item"> <Link to="/">Home</Link></a>
              <a class="item"><Link to="/contact">Contact</Link></a>
              <a class="item"><Link to="/sauce">Sauce</Link></a>
              <a class="item"><Link to="/toppings">Toppings</Link></a>
              <a class="item"><Link to="/order">Final Order</Link></a>
            </div>
         </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/sauce">
            <Sauce />
          </Route>

          <Route path="/toppings">
            <Toppings />
          </Route>


          <Route path="/order">
            <Order />
          </Route>


          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

      //<div className = "App">
       // <h1>Home Page</h1>
       // <Contact></Contact>
     // </div>
    
    );
  }
}

export default Links;

