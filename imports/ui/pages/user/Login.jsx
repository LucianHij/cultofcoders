import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import {SubmitField} from 'uniforms-bootstrap3';
import LoginSchema from '/imports/api/user/loginSchema.js';
import route from '/imports/routing/router.js';

export default class LoginForm extends Component {


    render(){
        const CustomSubmitField = props =>
            <SubmitField value="Login" />;

        return (
            <div>
                <h2>Login Form</h2>
                <AutoForm schema={LoginSchema} placeholder={true}
                          submitField={CustomSubmitField}
                          onSubmit={(data) => this.login(data)}>
                </AutoForm>
            </div>
        )
    }

    login(data) {
        Meteor.loginWithPassword(data.email, data.password, function (err) {
            if (!err) {
                console.log('I was called because authentication was a success')
                route.go('/post/list');
            }
        })
    }

}