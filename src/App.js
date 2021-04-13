import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Dialogs from "./components/Dialigs/Dialigs.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Setings from "./components/Setings/Setings.jsx";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header />
      <NavBar />
      <div className="app_wrapper_content">
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}  />
          )}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/setings" render={() => <Setings />} />

        {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path= "/setings" component={Setings}/> */}
      </div>
    </div>
  );
};

export default App;
