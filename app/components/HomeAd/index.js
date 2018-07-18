import React from 'react'
import './style.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class HomeAd extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.data
        console.log(data)
        return(
            <div>
                <h2>超值特惠</h2>
                <div>
                    {data.map((item,index)=>{
                        return <div key={index}>
                                    <img src={item.img} alt=""/>
                            </div>
                    })}
                </div>
            </div>
        )
    }
}
export default HomeAd