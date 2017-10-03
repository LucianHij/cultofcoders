import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import {SubmitField} from 'uniforms-bootstrap3';
import RegisterSchema from './schemas/RegisterSchema';

export default class LoginForm extends Component {

//     handleLoginSubmit(doc) {
//         console.log(JSON.stringify(doc));
//         Meteor.loginWithPassword(doc.email, doc.password, (err) => {
// // login error
//             if (err)
//             {
//                 console.warn("error");
//                 console.warn(JSON.stringify(err));
//                 if(err.reason == "User not found"){
//                     this.setState({loginError: "User not found, you can sign up for this username."});
//                     return false;
//                 }
//                 if(err.reason == "Incorrect password"){
//                     this.setState({loginError: "Your password is incorrect. Please enter again!"});
//                     return false;
//                 }
//                 if(err.message == "User has no password set [403]")
//                 {
//                     this.setState({loginError:  "Please contact your system administration!"});
//                     return false;
//                 }
//
//                 else {
//                     this.setState({loginError: err.message});
//                     return false;
//                 }
//             }
//         });
//     };

    render(){
        const CustomSubmitField = props =>
            <SubmitField value="Register" />;

        return (
            <div>
                <h2>Register Form</h2>
                <AutoForm schema={RegisterSchema} placeholder={true}
                          submitField={CustomSubmitField}
                          onSubmit={console.log("CEVA")}>
                </AutoForm>
            </div>
        )
    }
}