import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import TextField  from 'uniforms-bootstrap3/TextField';
import LongTextField from 'uniforms-bootstrap3/LongTextField';
import PostSchema from '/imports/api/posts/schema.js';
import { Session } from 'meteor/session'
import {SubmitField} from 'uniforms-bootstrap3';

export default class PostEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postTitle: null,
            postDescription: null
        }
    }

    componentDidMount() {
        let postId = this.props._id;
        Meteor.call('post.get', postId, (error, result) => {
           this.setState({postTitle: result[0].title, postDescription: result[0].description});
        });
    }

    render(){
        return (
            <div>
                <h2>Edit a post</h2>
                <AutoForm
                    schema={PostSchema} placeholder={true}
                          onSubmit={(data) => Meteor.call('post.edit', this.props._id, data)}>
                    <h2>HI POSTS</h2>

                    <TextField name = "title" value={this.state.postTitle || ""}/>
                    <LongTextField name = "description" value={this.state.postDescription || ""} />
                    <SubmitField/>

                </AutoForm>



            </div>
        )
    }
}