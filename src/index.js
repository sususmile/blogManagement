import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import App from "./App";
import {Route,Switch } from 'react-router'
import {BrowserRouter} from 'react-router-dom';
import MsgDetail from "./MsgDetail";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route  path="/msgDetail/:data" component={MsgDetail} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
)
