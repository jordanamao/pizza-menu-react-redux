import React from 'react';
import { connect } from 'react-redux';
import {Header} from 'semantic-ui-react'


const mapStateToProps = state => {
    return { contact : state.contact,
            sauce: state.sauce,
            toppingsList: state.toppingsList
    }
    //map store's state to order component
}

const Order = ({contact,sauce,toppingsList}) => (
    <div class="ui stacked segments"> 
        <div class="ui segment">
            <p> 
                <Header as="h2" color="teal" textAlign="center">Contact Information:</Header>
                <h5>Name: {contact.name}</h5>
                <h5>Email: {contact.email}</h5>
                <h5>Name: {contact.address}</h5>
                <h5>Phone_Number: {contact.phone_number}</h5>
            </p> 
        </div>

        <div class="ui segment">
            <p> 
                <Header as="h2" color="teal" textAlign="center">Sauce Level and Crust Types:</Header>
                <h5>Crust: {sauce.crust}</h5>
                <h5>Sauce: {sauce.sauce}</h5>
            </p> 
        </div>


        <div class="ui segment">
            <p>
                <Header as="h2" color="teal" textAlign="center">Toppings:</Header>

                    {Object.entries(toppingsList).map(([key,val])=>
                    <h5>{key}:{val}</h5>)}    
            </p> 
        </div>
    </div>
);


export default connect(mapStateToProps)(Order);
