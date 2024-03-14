import React from "react";
import './App.css';
import Profile from '../Profile/Profile';
import { api } from "../../utils/Api";

function App() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(item => {
        setUser(item);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <Profile
        user={user}
      />
    </>
  );
}

export default App;
