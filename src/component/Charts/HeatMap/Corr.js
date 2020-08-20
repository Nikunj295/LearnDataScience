import Chart from "react-apexcharts";
import React ,{Component} from "react"
import Axios from "axios"

class Corr extends Component {
    state = {
        series: [] ,
        options: {},
        r:false
    }

    componentWillMount(){
        if(this.props.values){
            let id = localStorage.getItem('myid')
            let payload = {
                id
            }
    
            Axios.post("http://127.0.0.1:5000/corr",null,{
                params:{
                    payload
                }
            })
            .then(res => res.data)
            .then(data=>{
                var myData1 = Object.keys(data).map(key => {
                    return data[key];
                })

                let column = [] 
                let columns = []
                column = Object.keys(myData1[0])
                for(let i=1;i<column.length;i++){
                    columns.push(column[i])
                }
                
                let t = []
                myData1.map(i=>{
                    Object.keys(i).map(a=>{
                        if(a!=="index"){
                            t.push({x:a,y:i[a]})
                        }
                    })
                })
                
                let temp = []
                let count = 0
                columns.map(i=>{
                    let x = []
                    let q = columns.length+count
                    for(let i=count; i<q; i++,count++){
                        x.push(t[i])
                    }    
                    temp.push({
                        name:i,
                        data:x
                    })
                })
                
                this.setState({series:temp})
                let options = {
                    chart: {
                      type: 'heatmap',
                    },
                    stroke: {
                      width: 0
                    },
                    plotOptions: {
                      heatmap: {
                        radius: 10,
                        enableShades: false,
                        colorScale: {
                          ranges: [{
                              from: 0,
                              to: 50,
                              color: '#008FFB'
                            },
                            {
                              from: 51,
                              to: 100,
                              color: '#00E396'
                            },
                          ],
                        },
                    
                      }
                    },
                    dataLabels: {
                      enabled: true,
                      style: {
                        colors: ['#fff'],
                        fontSize:"18px"
                      }
                    },
                    xaxis: {
                        type: 'category',
                        labels:{
                          style:{
                            fontSize:'18px'
                          }
                        }
                    },
                    yaxis: {
                        type: 'category',
                        labels:{
                          style:{
                            fontSize:'18px'
                          }
                        }
                    },
                    title: {
                      text: 'Rounded (Range without Shades)'
                    },
                }
                this.setState({options})
                this.setState({r : true})
            })
        }
    }


    render() {
      return (
        <>
            {this.state.r?<Chart options={this.state.options} series={this.state.series} type="heatmap"  />
             :null}
        </>
        )
    }
}

export default Corr
