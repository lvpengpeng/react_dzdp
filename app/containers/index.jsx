import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { CITYNAME } from '../config/localStoreKey';
import LocalStorage from '../util/localStore.js'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as userinfoActionsFormOther from '../actions/userinfo.js'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone:false,
            city:""
        }
    }
    render() {
        return (
            <div>
                {this.state.initDone?this.props.children: <div>{this.state.city}</div>}
            </div>
        )
    }

    componentDidMount(){
        // 从loaclstoreage里取城市
        let cityName = LocalStorage.getItem(CITYNAME);
        if(cityName==null){
            cityName="北京"
        }

        this.props.userinfoActions.login({
            cityName:cityName
        })
        this.setState({
            city:cityName,
            initDone:true
        })
    }
}



function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions: bindActionCreators(userinfoActionsFormOther,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

// 1.
// jquery.js源代码中所有的等于判断都要===
// 除了   obj.c == null （这种情况）判断这个对象有没有这个属性。

// 2.
// connect 会返回一个函数，执行这个函数把app组件传进去。
// mapStateToProps把state作为属性传入到redux中去。
// mapDispatchToProps把action作为属性传到redux中去。