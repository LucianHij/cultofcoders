import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import {SubmitField} from 'uniforms-bootstrap3';
import LoginSchema from './schemas/LoginSchema.js';

export default class LoginForm extends Component {


    render(){
        const CustomSubmitField = props =>
            <SubmitField value="Login" />;

        return (
            <div>
                <h2>Login Form</h2>
                <AutoForm schema={LoginSchema} placeholder={true}
                          submitField={CustomSubmitField}
                          onSubmit={console.log("CEVA")}>

                    <h2>HI POSTS</h2>
                </AutoForm>
            </div>
        )
    }
}