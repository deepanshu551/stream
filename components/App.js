import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Router} from "react-router-dom";
import Headers from './Headers';
import Streamcreate from './streams/StreamCreate';
import Streamdelete from './streams/StreamDelete';
import Streamedit from './streams/StreamEdit';
import Streamlist from './streams/StreamList';
import Streamshow from './streams/StreamShow';
import history from "../history"
class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                <Headers/>
                <Switch>
                    <Route exact path="/"><Streamlist/></Route>
                    <Route exact path="/streams/new"><Streamcreate/></Route>
                    <Route exact path="/streams/edit/:id"><Streamedit/></Route>
                    <Route exact path="/streams/delete/:id"><Streamdelete/></Route>
                    <Route exact path="/streams/show/:id"><Streamshow/></Route>
                </Switch>
                
                </Router>
            </div>
        );
    }
}

export default App;
