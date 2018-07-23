import React from 'react'
import './style.less'

class SearchInput extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            value:''
        }
    }
    render(){
        return (
            <input 
            type="text" 
            className="search-input"
            value={this.state.value}
            onChange = {this.changHandle.bind(this)}
            onKeyUp = {this.keyUpHandle.bind(this)}
            />
        )
    }
    componentDidMount(){
        this.setState({
            value:this.props.value||""
        })
    }
    changHandle(e){
        this.setState({
            value:e.target.value
        })
    }
    keyUpHandle(e){
        if(e.keyCode==13){
            console.log(this.state.value)
            this.props.enterHandle(this.state.value)
        }
    }
}

export default SearchInput