import React, { Component } from 'react';
import {connect} from 'react-redux';
import renderChart from '../utils/index';



class BarChart extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    componentDidMount(){
    
       renderChart(this.props.data);
    }
    render() {
        return (
            <div id='barChart' style={{position:'relative',width:'1000px',height:'500px'}}>
                
            </div>
        );
    }
}
function mapStateToProps(state){
    return {data:state.data};
}
export default connect(mapStateToProps)(BarChart);