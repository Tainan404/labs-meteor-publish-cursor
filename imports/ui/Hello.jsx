import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = (read) => {
    const method = read ? 'insertRead' : 'insertUnread';
    Meteor.call(method);
  };

  return (
    <div>
      <button onClick={()=> increment(true)}>Add Read</button>
      <br/>
      <button onClick={()=> increment(false)}>Add Unread</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
