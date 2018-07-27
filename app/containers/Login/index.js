import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'

import { connect } from 'react-redux'
import { hashHistory } from 'react-router'


import { bindActionCreators } from 'redux'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            checking:true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                    ?<div>loding</div>
                    : <div>这里显示登录组件</div>
                }
            </div>
        )
    }

    componentDidMount(){
        this.doCheck()
    }

    loginHandle(username){
        //为何要把登录之后的处理代码单独分割出来了？————因为登录组件作为一个组件，是一种功能性的存在（木偶组件），它只懂得执行交给它任务，不理会交给了它什么。而登录之后的处理，一种业务性的存在，需要在更外层的组件（智能组件）中定义出来，然后传递给它。

        //loginHandle是登录成功之后的业务处理
        // 保存用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        const params = this.props.params
        const router = params.router
        if (router) {
            // 跳转到指定的页面
            hashHistory.push(router)
        } else {
            // 跳转到用户主页
            this.goUserPage()
        }
    }

    doCheck(){
        const userinfo = this.props.userinfo;
        if(userinfo.username){
            console.log('已经登录')
            this.goUesrPage()
        }else{
            console.log('没登录');
            this.setState({
                checking:false
            })
        }
    }

    goUesrPage(){
        hashHistory.push('/User')
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Login
function mapStateToProps (state){ 
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)