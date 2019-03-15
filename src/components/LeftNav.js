import React,{Component} from 'react'
import "../css/LeftNav.css"
import NavList from "./NavList";

class LeftNav extends Component{
    constructor(){
        super();
        this.state = {
            displays:[false,false,false],
            message:[],
            clickContent:""
        }
    }
    handleToggle(e){
        var index = e.target.getAttribute("id");
        this.state.displays[index-1]=!this.state.displays[index-1];
        this.setState({
           displays:this.state.displays
        })
    }

    handleMessage(listContent){
        if(listContent==="用户列表"){
            fetch('/Blog/displayMaster.do', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(function(response) {
                return response.json();
            }).then(responseJson => {this.setState({message:responseJson,clickContent:listContent});this.props.getMessage(this.state.message,this.state.clickContent)}).catch(function () {
                console.log("出错");
            });
        }
        else{
            fetch('/Blog/displayComment.do', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(function(response) {
                return response.json();
            }).then(responseJson => {this.setState({message:responseJson,clickContent:listContent});this.props.getMessage(this.state.message,this.state.clickContent)}).catch(function () {
                console.log("出错");
            });
        }

    }
    render(){
        const lists1=['发表文章','管理文章'];
        const lists2=['用户列表'];
        const lists3=['发表日记','管理日记'];
        const lists4=['留言列表'];
        return(
          <div className='leftNav'>
              <ul className='navClass'>
                  <li onClick={this.handleToggle.bind(this)} id="1">管理文章</li>
                  <li><ul style={{display:(this.state.displays[0])?'block':'none'}}>{lists1.map((list,i)=><NavList list={list} key={i} index={i} MsgList={this.handleMessage.bind(this)}/>)}</ul></li>
                  <li onClick={this.handleToggle.bind(this)} className='toggle' id="2">管理用户</li>
                  <li><ul style={{display:(this.state.displays[1])?"block":"none"}}>{lists2.map((list,i)=><NavList list={list} key={i} index={i} MsgList={this.handleMessage.bind(this)}/>)}</ul></li>
                  <li onClick={this.handleToggle.bind(this)} className='toggle' id="3">管理日记</li>
                  <li><ul style={{display:(this.state.displays[2])?"block":"none"}}>{lists3.map((list,i)=><NavList list={list} key={i} index={i} MsgList={this.handleMessage.bind(this)}/>)}</ul></li>
                  <li onClick={this.handleToggle.bind(this)} className='toggle' id="4">管理留言</li>
                  <li><ul style={{display:(this.state.displays[3])?"block":"none"}}>{lists4.map((list,i)=><NavList list={list} key={i} index={i} MsgList={this.handleMessage.bind(this)}/>)}</ul></li>
              </ul>
          </div>
        );
    }
}

export default LeftNav