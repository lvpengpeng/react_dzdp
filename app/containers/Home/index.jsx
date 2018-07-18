import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName="深圳"></HomeHeader>
                <Category></Category>
                <div style={{height:'15px'}}></div>
                <Ad/>
            </div>
        )
    }
}

export default Home
