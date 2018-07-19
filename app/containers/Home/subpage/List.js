import React from 'react'
import { getListData } from '../../../fetch/home/home.js'
import './style.less'
import ListComponents  from '../../../components/List'
class List extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            data:[],
            hasMore:false
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
                {this.state.data.length?<ListComponents data={this.state.data}/>:"加载中。。。。"}          
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
                data: data
            })
        })
    }
}
export default List


