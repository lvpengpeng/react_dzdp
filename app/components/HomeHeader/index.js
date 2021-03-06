import React from 'react'
import './style.less'
import { connect } from 'react-redux'
import { Link , hashHistory } from 'react-router'

import SearchInput from '../SearchInput'
class HomeHeader extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            kwd: ''
        }
    }
    render(){
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.userinfo.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/login">
                    <i className="icon-user"></i>
                    </Link >
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp;
                        <SearchInput placeholder="请输入关键字" value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    enterHandle(vaule) {
        hashHistory.push('/search/all/' + encodeURIComponent(vaule))
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

