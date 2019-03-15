import React,{Component} from 'react'

class UserList extends Component{
    render(){
        const info = this.props.info;
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{(info.sex)?"男":"女"}</td>
            </tr>
        )
    }
}

export default UserList