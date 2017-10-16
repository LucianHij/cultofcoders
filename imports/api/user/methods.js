import { Meteor } from 'meteor/meteor';

Meteor.methods({

    'user.register': function(data) {

        if (data.password !== data.confirm_password) {
            throw new Meteor.Error('pass-no-match', "Passwords doesn't match");
        }

        if (Meteor.users.find({email: data.email}).fetch().size > 0) {
            throw new Meteor.Error('user-exists', "The user already exist");
        }

        Accounts.createUser({
            email: data.email,
            password: data.password
        });
    }
});