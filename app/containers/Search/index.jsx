import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SaerchHeader from '../../components/SearchHeader'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SaerchHeader keyword={params.keyword}/>
                {/* params.keyword 是在roter中定义了 */}
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Search
module.exports = Search