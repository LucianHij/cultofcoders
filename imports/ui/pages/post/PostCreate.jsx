import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import TextField  from 'uniforms-bootstrap3/TextField';
import LongTextField from 'uniforms-bootstrap3/LongTextField';
import PostSchema from '/imports/api/posts/schema.js';
import route from '/imports/routing/router.js';
import {SubmitField} from 'uniforms-bootstrap3';

export default class PostCreate extends Component {


    render(){

        return (
            <div>
                <h2>Create a post</h2>
                <AutoForm schema={PostSchema} placeholder={true}
                          onSubmit={(data) => Meteor.call('post.create', data, function(err){
                              if(err) {
                                  return;
                              }
                              route.go('/post/list');
                          })}>
                    <h2>HI POSTS</h2>

                    <TextField name = "title"/>
                    <LongTextField name = "description" />
                    <SubmitField/>
                </AutoForm>
            </div>
        )
    }
}