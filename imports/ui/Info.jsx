import React from 'react';
import { useTracker } from 'meteor/react-meteor-data'
import { ReadListCollection, UnreadListCollection } from '/imports/api/list';

export const Info = () => {
  const { readItems, unreadItems } = useTracker(()=>{
    return {
      readItems: ReadListCollection.find({}).fetch(),
      unreadItems: UnreadListCollection.find({}).fetch(),
    };
  });
  return (
    <div>
      <h2>Learn Meteor!</h2>
      <h3>read items</h3>
      <ul>
        {
          readItems.map((item)=>(<li>{`${item.text} : ${item.read}`}</li>))
        }
      </ul>
      <h3>unread items</h3>
      <ul>
        {
          unreadItems.map((item)=>(<li>{`${item.text} : ${item.read}`}</li>))
        }
      </ul>
    </div>
  );
};
