import React from 'react'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandle() {
        // 执行传输过来的
        this.props.loadMoreFn();
    }
    componentDidMount(){

        const loadMoreFn =this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;


        // 节流 : 连续滚动 触发一次
        let timeoutId;
        function callback(){
            // getBoundingClientRect()元素距离顶部的值
            const top = wrapper.getBoundingClientRect().top
            console.log(top,'元素距离顶部的值')
            const windowHeight = window.screen.height;
            // window.screen.height屏幕高度
            if(top&&top<windowHeight){

                // 当wrapper已经被滚动到暴露在页面的可视范围之内，触发
                loadMoreFn()
            }
        }
        window.addEventListener('scroll',function(){
            if(this.props.isLoadingMore){
                return 
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,100)
        }.bind(this))
    }
}

export default LoadMore