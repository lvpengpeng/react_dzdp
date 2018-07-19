import React from 'react'
import { getListData } from '../../../fetch/home/home.js'
import './style.less'
import ListComponents  from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
class List extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            // 储存列表信息
            data:[], 

            // 记录当前状态，还有没有更多的数据可供加载
            hasMore:false,

            // 记录当前状态，是“加载中...”（此时点击失效）还是“点击加载更多”
            isloadingMore:true,

            // 记录下一页的页码
            page:1
        }
    }
    render(){
        return(
            // <div>{this.state.data.length}</div>
            <div>
                <h2 className="love">猜你喜欢</h2>
                {/* {this.props.cityName} */}
                {/* <div>
                    {this.state.hasMore.toString()}
                    {this.state.data.length}
                </div> */}
                {this.state.data.length?<ListComponents data={this.state.data}/>:""}  
                {
                    this.state.hasMore? <LoadMore isloadingMore={this.state.isloadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>:""
                }        
            </div>
            
        )
    }
    componentDidMount() {

        // 获取首页数据
        this.loadFirstPageData()
    }
    // 获取首页数据  
    loadFirstPageData() {
        const cityName = this.props.cityName
        const result = getListData(cityName, 0)
        this.resultHandle(result)
    }
    // 加载更多数据
    loadMoreData(){
        // 记录状态
        this.setState({
            page: this.state.page + 1,
            isloadingMore:false
        })
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page)
        this.resultHandle(result)
        console.log(this.state.page)
    }
    // 处理数据
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            // console.log(json,55)
            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                // 这里这样格式 ，必须是json。：后不能写对象中的属性。例如obj.hasMose
                hasMore: hasMore,
                // 注意，这里是最新获取的数据，拼接到原数据之后，使用 concat 函数
                data: this.state.data.concat(data)
            })
        })
    }
}
export default List


