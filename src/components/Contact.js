import React , {Component}from 'react';
import Sauce from './Sauce';
import {connect} from 'react-redux';
import updateContact from '../action';
import {Form,Header} from 'semantic-ui-react';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: {
        name: '',
        email: '',
        address: '',
        phone_number: ''
      },
      formSubmitted : false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle changes from the form then update the react state (in values object)
  // once the state is updated, then the new state(values) is passed in the updateContact
  //funtion from action and dispatched using store's dispatch function

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
        values: {...this.state.values, [name]: value}
      }, 
      () => this.props.dispatch(updateContact(this.state.values))
    );
  }


  // handles submit form
  handleSubmit(){
    this.setState({
      formSubmitted:true
      })
  }

    render(){

      //if the form is submited then attach the children component sauce.
      if (this.state.formSubmitted === true){
        return(
          <Sauce />
        )
      }

      return(
        <div class="ui segment">
          <Form onSubmit = {()=> this.handleSubmit()}>
            {<Header as="h2" color="teal" textAlign="center">Please Enter Your Contact Information</Header> }
            
            <Form.Field>
              <label >Name:</label>
              <input type="text" name="name"  placeholder="Username" value={this.state.values.name} onChange={this.handleInputChange} />
            </Form.Field>
              
            <Form.Field>
              <label>Email:</label>
              <input type="text" name="email" placeholder="Email" value={this.state.values.email} onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>Address:</label>
              <input type="text" name="address" placeholder="Address" value={this.state.values.address} onChange={this.handleInputChange} />
            </Form.Field>
            
            <Form.Field>
              <label>Phone Number:</label>
              <input type="text" name="phone_number" placeholder="Phone Number" value={this.state.values.phone_number} onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field> 
            <button class="teal ui button" type="submit" value="Submit">Submit</button>
            </Form.Field>
          </Form>
      </div>
      );
    }
  }

  export default connect()(Contact);