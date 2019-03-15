import React,{Component}from 'react'
import "../css/Bottom.css"
import LeftNav from "./LeftNav";
import MainContent from "./MainContent";

class Bottom extends Component{
    constructor(){
        super();
        this.state={
            msgs:[],
            clickContent:""
        }
    }
    getMessage(msg,clickCount){
        this.setState({
            msgs:msg,
            clickContent:clickCount
        })
    }
    render(){
        return(
            <div className="bottom">
                <LeftNav getMessage={this.getMessage.bind(this)}/>
                <MainContent message={this.state.msgs} clickContent={this.state.clickContent}/>
            </div>
        )
    }
}
export default Bottom
