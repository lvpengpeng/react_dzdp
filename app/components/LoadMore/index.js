import React from 'react'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="load-more" >
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
        // 节流 : 连续滚动 触发一次
        let timeoutId;
        function callback(){
            console.log(456)
        }
        window.addEventListener('scroll',function(){
            if(this.props.isLoadingMore){
                return 
            }
            console.log(123)
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,100)
        }.bind(this))
    }
}

export default LoadMore