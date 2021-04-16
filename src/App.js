import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setings/Settings';

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs store={props.store} /> }/>

                    <Route path='/profile'
                           render={ () => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch} /> }/>
                    
                    <Route path='/news'
                           render={ () => <News store={props.store} /> }/>

                    <Route path='/music'
                           render={ () => <Music store={props.store} /> }/>

                    <Route path='/settings'
                           render={ () => <Settings store={props.store} /> }/>

                   

                </div>
            </div>
        )
}

export default App;