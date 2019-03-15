import React,{Component}from 'react'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import ThemeSwitch from "./ThemeSwitch";
import "../css/Top.css"
class Top extends Component{
    render() {
        return (
            <div className='headNav'>
                <div className='contianer'>
                    <div className="title">小仙女的博客后台管理系统</div>
                    <div className="greet">您好:<span>admin</span></div>
                </div>
            </div>
        );
    }
}
export default Top