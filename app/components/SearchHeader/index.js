import React from 'react'
import './style.less'
import SearchInput from '../SearchInput'
import { hashHistory } from 'react-router'

class SearchHeader extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            value:''
        }
    }
    render(){
        return (
            <div>
                <span onClick={this.clickHandle.bind(this)}>返回</span>
                <SearchInput value={this.props.keyword||""} enterHandle={this.enterHandle.bind(this)}/>
            </div>
        )
    }
    clickHandle(){
        window.history.back()
    }

    enterHandle(vaule) {
        hashHistory.push('/search/all/' + encodeURIComponent(vaule))
    }
}

export default SearchHeader
