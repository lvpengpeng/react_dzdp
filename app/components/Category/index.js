import  React  from "react";
import './style.less'
import ReactSwipe from 'react-swipe'

class Category extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            index:0
        }
    }
    render(){
        let option = {
            continuous: true,
            auto:2000,
            callback:function(index){
                this.setState({index:index})
            }.bind(this)
        }
        return(
            <div>
                <ReactSwipe className="carousel" swipeOptions={option}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
                <div>{this.state.index}</div>
            </div>
        )
    }
    componentDidMount(){
        console.log(ReactSwipe)
    }
}

export default Category