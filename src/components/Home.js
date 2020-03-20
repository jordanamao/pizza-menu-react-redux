import React , {Component}from 'react';
import {Header} from 'semantic-ui-react'

export default class Home extends Component {
    render(){
    return (<Header as="h2" color="teal" textAlign="center">Welcome to MyPizza App</Header>);
    }
}