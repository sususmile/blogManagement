import React ,{ Component } from 'react'
import { Router, Route } from 'react-router'
// import MsgDetail from "./MsgDetail";
import App from "./App";
import MsgDetail from "./MsgDetail";
// import createHashHistory from 'history/createHashHistory';

class RouteIndex extends Component{
    render(){
        // const hashHistory = createHashHistory();
        return(
            <Router>
                <Route path="/" component={App}>
                    {/*<IndexRoute component={Dashboard} />*/}
                    {/*<Route path="about" component={About} />*/}
                    {/*<Route path="inbox" component={Inbox}>*/}
                        {/*/!* 使用 /messages/:id 替换 messages/:id *!/*/}
                        {/*<Route path="/messages/:id" component={Message} />*/}
                    {/*</Route>*/}
                </Route>
            </Router>


        )
    }
}

export default RouteIndex
