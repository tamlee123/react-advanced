import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import Login from "./context/Login";
import UserContext from "./context/userContext";

class App extends Component {
  handleLoggedIn = (usrename) => {
    console.log("Getting the user: " + usrename);
    const user = { name: "Mosh" };
    this.setState({ currentUser: user });
  };
  state = { currentUser: null };
  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
