import SimpleSchema from 'simpl-schema';

const Post = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    description: {
        type: String,
        label: "Description"
    },
    createdAt: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    },
    userId: {
        type: String,
        optional: true,
        autoValue:function(){ return this.userId }
    }
});

export default Post;
