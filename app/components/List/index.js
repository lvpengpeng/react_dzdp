import React from 'react'
import './style.less'
import Items from './Item'

class List extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        const data = this.props.data;
        return (
            <div className="list-warp">
                {data.map((item,index)=>{
                    return <Items key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default List