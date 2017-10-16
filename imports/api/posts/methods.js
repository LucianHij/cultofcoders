import { Meteor } from 'meteor/meteor';
import Security from '/imports/api/security.js';
import Schema from './schema.js';
import Posts from '/imports/api/posts/collection.js';
PostsCollection = Posts;
PostsCollection.attachSchema(Schema);

Meteor.methods({
    'post.create': function(data) {
        Security.checkLoggedIn(this.userId);

        PostsCollection.insert(data);
    },

    'post.get': function(_id) {
        let post = PostsCollection.find({_id: _id}).fetch();

        return post;
    },

    'post.edit': function (_id, data) {

        let userId = PostsCollection.find({_id: _id}, {fileds: {userId:1}}).fetch();

        if(Meteor.userId() !== userId) {
            throw new Meteor.Error('no-permission', "Permission Denied");
        }

        PostsCollection.update({_id: _id}, {title: data.title, description: data.description});
    }
});