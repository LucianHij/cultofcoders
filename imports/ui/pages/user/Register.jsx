import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import {SubmitField} from 'uniforms-bootstrap3';
import RegisterSchema from './schemas/RegisterSchema';
import route from '/imports/routing/router.js';

export default class LoginForm extends Component {

    render(){
        const CustomSubmitField = props =>
            <SubmitField value="Register" />;

        return (
            <div>
                <h2>Register Form</h2>
                <AutoForm schema={RegisterSchema} placeholder={true}
                          submitField={CustomSubmitField}
                          onSubmit={(data) => Meteor.call('user.register', data)}>
                </AutoForm>
            </div>
        )
    }
}