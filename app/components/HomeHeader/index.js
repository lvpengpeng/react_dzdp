import React from 'react'
import './style.less'
import { connect } from 'react-redux'

class HomeHeader extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="header">
                <div>{this.props.userinfo.cityName}</div>
                <em className="icon-home"></em>
               <input type="text"/>
                <div>用户中心</div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
       
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeHeader)