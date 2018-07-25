import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header  from '../../components/Header'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const id = this.props.params.id
        console.log(id,6)
        return (
            <div>
                <Header data="商家详情"/>
                <h1>Detail</h1>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Detail
module.exports = Detail