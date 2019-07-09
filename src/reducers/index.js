import data from '../utils/data';
function BarChartData(state={},action){
    console.log(action)
    switch(action.type){
        case 'FETCH_DATA':
            let payload = action.payload;
            return  {...state,payload};
        default:
              return {...state,data};
    }
   
}

export default BarChartData;