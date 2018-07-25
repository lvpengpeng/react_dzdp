import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SaerchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'
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
                {/* params.keyword ,params.category是在roter中定义了 */}
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Search
export default Search