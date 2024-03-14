import React from "react";
import './App.css';
import Profile from '../Profile/Profile';
import { api } from "../../utils/Api";
import Search from "../Search/Search";

function App() {
  const [user, setUser] = React.useState([]);
  const [searchText, setSearchText] = React.useState([]);



  function handleSearchText() {
    api
      .getUserInfo(searchText)
      .then(item => {
        setSearchText(item)
      })
      .catch(err => {
        console.log(err);
      })
  }

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
      <Search
        searchText={searchText}
        handleSearch={handleSearchText} />
      <Profile
        user={user}
      />
    </>
  );
}

export default App;
