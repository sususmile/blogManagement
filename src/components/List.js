import React,{Component} from 'react'
import UserList from "./UserList";
import MessageList from "./MessageList";


class List extends Component{
    render(){
        const info = this.props.lists;
        const clickCon = this.props.clickContent;
        if(clickCon==="用户列表"){
            return(
                <UserList info={info}/>
            );
        }
        else if(clickCon==="留言列表"){
            return(
                <MessageList info={info}/>
            );
        }
        else{
            return(
                <MessageList info={info}/>
            );
        }

    }
}

export default List