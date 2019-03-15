import React,{Component} from 'react'
import "../css/MainContent.css"
import List from "./List";

class MainContent extends Component{
    constructor(){
        super()
        this.state={
            status:new Date()
        }
    }
    componentDidMount() { //组件渲染完成，要挂载到页面前执行的代码
        this.timer = setInterval(
            () => this.trick(),
            1000
        );
    }

    componentWillUnmount() { //组件从页面卸载前执行的方法
        clearInterval(this.timer);
    }

    trick() {
        this.setState({status: new Date()}); //改变组件的状态
    }
    render(){
        if(this.props.clickContent===""){
            return(
                <div className='mainContentPage'>
                    <span>{this.state.status.toLocaleTimeString()}</span>
                    <h1>欢迎使用小仙女博客管理后台</h1>
                </div>
            );
        }
        else if(this.props.clickContent==="用户列表"){
            return(
                <div className='mainContent'>
                    <form action="" method="post">
                        <span>{this.state.status.toLocaleTimeString()}</span>
                        <table border="1" cellSpacing="0" cellPadding="0">
                            <caption>{this.props.clickContent}</caption>
                            <tbody>
                            <tr>
                                <th>编号</th>
                                <th>用户名</th>
                                <th>性别</th>
                            </tr>
                            {this.props.message.map((lists,i)=><List lists={lists} key={i} clickContent={this.props.clickContent}/>)}
                            </tbody>
                        </table>
                    </form>
                </div>
            );
        }
        else if(this.props.clickContent==="留言列表"){
            return(
                <div className='mainContent'>
                    <form action="" method="post">
                        <span>{this.state.status.toLocaleTimeString()}</span>
                        <table border="1" cellSpacing="0" cellPadding="0">
                            <caption>{this.props.clickContent}</caption>
                            <tbody>
                            <tr>
                                <th>作者</th>
                                <th>留言内容</th>
                                <th>详情</th>
                                <th>删除</th>
                            </tr>
                            {this.props.message.map((lists,i)=><List lists={lists} key={i} clickContent={this.props.clickContent}/>)}
                            </tbody>
                        </table>
                    </form>
                </div>
            );
        }

        else{
            return(
                <div className='mainContent'>
                    <form action="" method="post">
                        <table border="1" cellSpacing="0" cellPadding="0">
                            <caption>{this.props.clickContent}</caption>
                            <tbody>
                            <tr>
                                <th>作者</th>
                                <th>留言内容</th>
                                <th>详情</th>
                                <th>删除</th>
                            </tr>
                            {this.props.message.map((lists,i)=><List lists={lists} key={i} clickContent={this.props.clickContent}/>)}
                            </tbody>
                        </table>
                    </form>
                </div>
            );
        }

    }
}

export default MainContent