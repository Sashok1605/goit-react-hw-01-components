import './App.css';
import Statistics from './components/Statistics/Statistics';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionList from './components/TransactionList /TransactionList';
import { name, tag, location, avatar, stats } from './data/user.json';
import friends from './data/friends.json';
import statisticalData from './data/statistical-data.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
