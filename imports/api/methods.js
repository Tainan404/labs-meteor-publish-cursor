import { Meteor } from 'meteor/meteor';
import { ListCollection } from '/imports/api/list';

const insertItemsToList = (read = false) => {
  console.log('read', read);
  const count = ListCollection.find().count() + 1;
  ListCollection.insert({text: `item - ${count}`, read: read, });
}

Meteor.methods({
  insertRead: ()=> insertItemsToList(true),
  insertUnread: ()=> insertItemsToList(false),
});
