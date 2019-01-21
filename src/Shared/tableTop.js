import React, {Component} from  'react';
import CHeaderShared from '../Controller/CHeaderShared';
class TableTop extends Component{

    constructor(props){
        super(props);
        this.generateData =  this.generateData.bind(this);
        this.state =  {data:[]};
        this.generateData();
      }

      urlSuccess(data){
          console.log(data);
          this.setState({
            data:data.data,
          });
    
      }
    generateData(){
        
        CHeaderShared.mostVisited()
        .then(data=>this.urlSuccess(data))
        .catch(error=>console.log(error));
      }
    render(){
        if(this.state.data.length > 0){
            return (
                <div className="container">
            
            <table className="table table-striped table-hover table-dark">
            <thead>
            <tr>
                <th colSpan="2" scope="col">Top 100  URL MOST VISITED</th>
               
              </tr>
              <tr>
                <th scope="col">visits</th>
                <th scope="col">URL</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((val)=>{
                 return (<tr>
                    <td>{val.visited}</td>
                    <td>{val.url}</td>
                  </tr>);
              })}
              
            </tbody>
          </table>
          </div>
    );
        }else{
            return (<img style={{width:70,height:70}} src="https://loading.io/spinners/vortex/lg.vortex-spiral-spinner.gif"/>);
        }
  

    }

}
export default TableTop;