import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import Item from './Item'
class OrderLisr extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        const submitComment = this.props.submitComment;
        return (
            <div>
                {
                    data.map((item,index)=>{
                        return <Item key={index} data={item} submitComment ={submitComment.bind(this)}/>
                    })
                }
            </div>
        )
    }
}

export default OrderLisr