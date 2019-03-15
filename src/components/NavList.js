import React,{Component} from 'react'
// import ReactDOM from 'react-dom'
// import "../css/NavList.css"

class NavList extends Component{
    handleMessage(){
        if(this.props.MsgList){
            this.props.MsgList(this.props.list)
        }
    }
    render(){
        return(
                <li onClick={this.handleMessage.bind(this)}><a href='#'>{this.props.list}</a></li>
        );
    }
}

export default NavList