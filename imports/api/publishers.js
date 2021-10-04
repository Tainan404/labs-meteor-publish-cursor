import { ListCollection, ReadListCollection, UnreadListCollection } from '/imports/api/list';

Meteor.publish('readlist', function(){
  Mongo.Collection._publishCursor( ListCollection.find({ read: true }), this, 'readlist'); 
  this.ready();
});

Meteor.publish('unreadlist', function(){
  Mongo.Collection._publishCursor( ListCollection.find({ read: false }), this, 'unreadlist'); 
  this.ready();
});