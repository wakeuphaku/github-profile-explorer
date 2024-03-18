import React from "react";
import './App.css';
import Profile from '../Profile/Profile';
import { api } from "../../utils/Api";
import Search from "../Search/Search";

function App() {
  const [user, setUser] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');

  function getUser() {
    api
      .getUserInfo(searchText)
      .then(item => {
        setUser(item);
      })
      .catch(err => {
        console.log(err);
      })
  };

  function handleSearchText(searchText) {

    getUser()
  }

  return (
    <>
      <Search
        searchText={setSearchText}
        handleSearch={handleSearchText} />
      <Profile
        user={user}
      />
    </>
  );
}

export default App;
