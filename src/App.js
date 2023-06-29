import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import { Route } from "react-router-dom";
import MessagesContainer from '../src/components/Messages/MessagesConteiner';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavConteiner from './components/Nav/NavConteiner';
import New from './components/New/New';
import UsersConteiner from './components/Users/UsersConteiner/UsersConteiner';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import HeiderContainer from './components/Heider/HeiderContainer';
import Login from './components/Login/Login';
import { initializationProgress } from './Redux/appReducer';
import Preloader from './component/pleloader/preloader';

import './App.css';

class App extends React.Component {

    componentDidMount() {
        this.props.initializationProgress();
    }

    render() {
        if(!this.props.initialization) {
            return <Preloader />
        } 
        return (
                <div className="App">
                    <HeiderContainer />
                    <NavConteiner />
                    <div className='App-content'>
                        <Switch>
                            <Route path="/messages"
                                component={MessagesContainer} />
                            <Route path="/profile/:userid?"
                                component={ProfileConteiner} />
                            <Route path="/new"
                                component={New} />
                            <Route path="/music"
                                component={Music} />
                            <Route path="/settings"
                                component={Settings} />
                            <Route path="/users"
                                component={UsersConteiner} />
                            <Route path="/login"
                                component={Login} />
                        </Switch>
                    </div>
                </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {initialization: state.app.initialization}
}

export default compose( 
    connect(mapStateToProps, { initializationProgress }))(App);
