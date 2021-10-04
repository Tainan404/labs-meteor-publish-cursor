import { Meteor } from 'meteor/meteor';
import { ListCollection } from '/imports/api/list';
import '/imports/api/publishers';
import '/imports/api/methods';


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (ListCollection.find().count() === 0) {
    for (let index = 0; index < 20; index++) {
      ListCollection.insert({text: `item - ${index+1}`, read: index < 10? true : false });
    }
  }
});
