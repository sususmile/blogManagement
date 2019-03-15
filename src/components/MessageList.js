import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class MessageList extends Component{
    deleteMessage(){
        fetch('/Blog/deleteMessage.do', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:"id="+this.props.info.id,
        }).then(function(res) {
           return res.text();
         }).then(responseText => {console.log(JSON.stringify(responseText));window.location.href='http://localhost:3000/'}).catch(function () {
            console.log("出错");
        });

    }
    render(){
        const info = this.props.info;
        const datas = JSON.stringify(info);
        let path = '/msgDetail/'+datas;
        return(
            <tr>
                <td>{info.master.name}</td>
                <td>{info.content}</td>
                <td><Link to={path}>查看</Link></td>
                <td><a href="#" onClick={this.deleteMessage.bind(this)}>删除</a></td>
            </tr>
        )

    }
}

export default MessageList