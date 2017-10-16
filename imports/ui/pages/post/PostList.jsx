import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import Posts from '/imports/api/posts/collection.js';
import route from '/imports/routing/router.js';
class PostList extends React.Component {

    editPost(e) {
        let postId = e.target.getAttribute("data-id");
        route.go("/post/edit/"+postId);
    }

    componentWillMount() {
        if (this.props.user === undefined) {
            route.go('/login');
        }
    }

    render() {
        const {loading, posts, user} = this.props;

        if (loading) {
            return <div>Waiting for the method</div>
        }
        return (
            <div>
                {
                    posts.map(post => {
                        return (
                            <div key={post._id}>
                                <h3>{post.title}</h3>
                                <div>{post.description}</div>
                                {user._id === post.userId && <button
                                    onClick = {this.editPost}
                                    data-id = { post._id }
                                >Edit</button>}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default createContainer((props) => {
    const handle = Meteor.subscribe('posts');

    return {
        loading: !handle.ready(),
        posts: Posts.find({}, {sort: {createdAt: -1}}).fetch(),
        user: Meteor.user()
    }
}, PostList)