import React from 'react'
import './style.less'

class Header extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div>
                <span onClick={this.clickHandle.bind(this)}>返回</span>
                <div>
                    {this.props.data}
                </div>
            </div>
        )
    }

    clickHandle (){
        window.history.back()
    }
}

export default Header