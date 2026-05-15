import "./App.css";
import Profiles from "./components/profiles/Profiles.jsx";
import FriendList from "./components/friendlist/FriendList.jsx";
import TransactionHistory from "./components/transactionhistory/TransactionHistory.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transaction.json";
function App() {
  return (
    <>
      <Profiles
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
