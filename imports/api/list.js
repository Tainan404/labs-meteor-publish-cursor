import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const ListCollection = new Mongo.Collection('list');

export const ReadListCollection = new Mongo.Collection('readlist');
export const UnreadListCollection = new Mongo.Collection('unreadlist');

if (Meteor.isServer) {
  console.log('foi hj');

  
}
