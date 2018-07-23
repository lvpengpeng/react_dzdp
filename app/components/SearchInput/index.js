import React from 'react'
import './style.less'

class SearchInput extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <input type="text" className="search-input"/>
        )
    }
}

export default SearchInput