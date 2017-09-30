import { Meteor } from 'meteor/meteor';
import Donuts from '/imports/api/donuts/collection';
Meteor.methods({
    'create_a_donut': function (one, two, three) {
        return [one, two, three];
  }
})