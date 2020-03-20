import React , {Component} from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import {updateToppings} from '../action';
import {Form,Header} from 'semantic-ui-react';
import "./pizza/Pizza.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Base from "./base/Base";
import Tomato from "./tomato/Tomato";
import Mushroom from "./mushroom/Mushroom";
import Corn from "./corn/Corn";
import Veggie from "./veggie/Veggie";
import ButtonGroup from "./buttonGroup/buttonGroup";

class Toppings extends Component {

  constructor(props) {

    super(props);
    this.state = {
      values:{
        tomato: false,
        mushroom: false,
        corn: false,
        veggie: false
        },
        formSubmitted: false
    }
    this.clickEventHandler = this.clickEventHandler.bind(this);
    // this.handleSubmit= this.handleSubmit.bind(this);
  }

 
  clickEventHandler = ingredient => {
    if (ingredient === "tomato") {
      this.setState({
       values:{...this.state.values,tomato: !this.state.values.tomato}
      });
    } else if (ingredient === "mushroom") {
      this.setState({
         values:{...this.state.values,mushroom: !this.state.values.mushroom}
      });
    } else if (ingredient === "corn") {
      this.setState({
        values:{...this.state.values,corn: !this.state.values.corn}
      });

    } else if (ingredient === "veggie") {
      this.setState({
       values:{...this.state.values,veggie:!this.state.values.veggie,}
      });
    } else {
      
      this.setState({
        formSubmitted: true},
        () => this.props.dispatch(updateToppings(this.state.values))  
      )
    }
  };



  render() {

    if (this.state.formSubmitted === true){
      return(
          <Order />
      )
    }

    const tomato = this.state.values.tomato && <Tomato />;
    const mushroom = this.state.values.mushroom && <Mushroom />;
    const corn = this.state.values.corn && <Corn />;
    const veggie = this.state.values.veggie && <Veggie />;

    return (
      <div class= "ui segment">
        <Form >
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {tomato}
              {mushroom}
              {corn}
              {veggie}
            </div>
          </div>
          <ButtonGroup eventHandler={this.clickEventHandler} />
        </div>

        </Form>
      </div>
    );
  }
}

export default connect()(Toppings);
