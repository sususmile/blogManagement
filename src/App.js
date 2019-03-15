import React,{Component}from 'react'
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import "./App.css"

class App extends Component{
    render(){
        return(
                <div className='totalPage'>
                    <Top/>
                    <Bottom/>
                </div>
        )
    }
}
export default App