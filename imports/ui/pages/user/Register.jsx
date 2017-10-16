import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import {SubmitField} from 'uniforms-bootstrap3';
import RegisterSchema from '/imports/api/user/registerSchema';
import AutoField  from 'uniforms-bootstrap3/AutoField';
import ErrorField  from 'uniforms-bootstrap3/ErrorField';
import route from '/imports/routing/router.js';

export default class LoginForm extends Component {

    render(){
        return (
            <div>
                <h2>Register Form</h2>
                <AutoForm schema={RegisterSchema} placeholder={true}
                          // submitField={CustomSubmitField}
                          onSubmit={(data) => Meteor.call('user.register', data, function(err) {
                              if(!err) {
                                  Meteor.loginWithPassword(data.email, data.password);
                                  route.go('/post/list');
                              }
                          }) }>

                    <AutoField name = "email"/>
                    <ErrorField name = "email"/>
                    <AutoField name = "password"/>
                    <ErrorField name = "password"/>
                    <AutoField name = "confirm_password"/>
                    <ErrorField name = "confirm_password"/>
                    <SubmitField/>

                </AutoForm>
            </div>
        )
    }
}