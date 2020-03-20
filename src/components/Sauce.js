import React , {Component}from 'react';
import { connect } from 'react-redux';
import Toppings from './Toppings';
import {updateSauce} from '../action';
import {Form,Header} from 'semantic-ui-react';


export class Sauce extends Component {
    constructor(props) {
        super(props);
        this.state = {
          values:{
            sauce: '',
            crust:''
          }
        }
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeCrust = this.handleChangeCrust.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
      handleChange(event) {
        this.setState({
          values: {...this.state.values, sauce: event.target.value}
        }, 
        () => this.props.dispatch(updateSauce(this.state.values))
      );
    }


      handleChangeCrust(event) {
        this.setState({
          values: {...this.state.values, crust: event.target.value}
        }, 
        () => this.props.dispatch(updateSauce(this.state.values))
      );
    }

      handleSubmit(){
        this.setState({
          formSubmitted:true
          })
      }

    render(){

        if (this.state.formSubmitted === true){
            return(
                <Toppings />
            )
          }

    
        return (
            <div class="ui segment">
                <Form onSubmit = {()=> this.handleSubmit()}>

                {<Header as="h2" color="teal" textAlign="center">Choose your sauce level and crust types!</Header> }
 
                <Form.Field>
                <label>
                    Pick your sauce level:
                    <select class="ui dropdown" value={this.state.values.sauce} onChange = {this.handleChange}>
                    <option value="extra">Extra Sauce</option>
                    <option value="less">Less Sauce</option>
                    <option value="spinach">Spinach and Feta</option>
                    <option value="pineapple">Pineapple</option>
                    </select>
                </label>
                </Form.Field>
            
                <Form.Field>
                <label>
                    Pick your crust type:
                    <select class="ui dropdown"value={this.state.values.crust} onChange = {this.handleChangeCrust}>
                    <option value="thin">Thin</option>
                    <option value="thick">Thick</option>
                    <option value="stuffed">Stuffed</option>
                    </select>
                </label>
                </Form.Field>

                <Form.Field>
                <button class="teal ui button" type="submit" value="Submit"> Sumbit</button>
                </Form.Field>
                </Form>
            </div>       
        );   
    }
}

export default connect()(Sauce);



