import React from 'react';
import Profile from './Profile/Profile';
import user from '../user.json/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data.json/data.json';
import FriendList from './FriendsList/FriendsList';
import friends from '../friends.json/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json/transactions.json';


export const App = () => {
  return (
    <div>
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
      
       <TransactionHistory items={transactions} />
      
    </div>
  );
};
