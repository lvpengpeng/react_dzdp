import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import CityList from '../../components/CityList'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header data="选择城市"/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity){
        if(newCity == null){
            return
        }
        // 修改return

        // 修改localstorage

        // 跳转首页
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default City
module.exports = City
