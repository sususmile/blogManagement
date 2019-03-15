import React,{Component} from 'react'
import "./css/MsgDetail.css"
import {Link} from 'react-router-dom'

class MsgDetail extends Component{
    render(){
         const jsonData =this.props.match.params.data;
         const data = jsonData.split("{").join("").split(",");
         const dataArray = [];
       for(var i=0;i<data.length;i++){
           var Pdata = data[i].split(":");
           if(typeof Pdata[Pdata.length-1]==="string"){
                dataArray.push(Pdata[Pdata.length-1])
           }
       }
        return(
            <div className="detail">
                <ul>
                    <li>编号:{dataArray[2]}</li>
                    <li>作者:{dataArray[4]}</li>
                    <li>留言内容:{dataArray[1]}</li>
                    <li>作者性别:{dataArray[6].substr(0,1)=="0"?"女":"男"}</li>
                    <li>留言日期:{dataArray[8].substr(1)}</li>
                </ul>
                <Link to="/"><button>返回</button></Link>
            </div>
        )
    }
}

export default MsgDetail