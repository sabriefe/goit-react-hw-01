import "./App.css";
import Profiles from "./components/Profiles.jsx";
import userData from "./userData.json";
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
    </>
  );
}

export default App;
