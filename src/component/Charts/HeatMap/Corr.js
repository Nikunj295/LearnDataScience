// import React, {useState} from 'react'
// import Axios from 'axios'
// import HeatMap from "react-heatmap-grid"
// import { local, set } from 'd3'
// import { Button } from '@material-ui/core'
// import { Component } from 'react'

// class Corr extends Component {
//     state = {
//         lab:[],
//         da:[],
//         r:false
//     }
//     componentWillMount(){
//         if(this.props.values){
//             let id = localStorage.getItem('myid')
//             let payload = {
//                 id
//             }
    
//             Axios.post("http://127.0.0.1:5000/corr",null,{
//                 params:{
//                     payload
//                 }
//             })
//             .then(res => res.data)
//             .then(data=>{
//                 var myData1 = Object.keys(data).map(key => {
//                     return data[key];
//                 })
//                 let column = [] 
//                 let columns = []
//                 column = Object.keys(myData1[0])
//                 for(let i=1;i<column.length;i++){
//                     columns.push(column[i])
//                 }
//                 this.setState({lab:columns})

//                 let temp = []
//                 columns.map(key=>{
//                     let x = myData1.map(a=>a[key])
//                     temp.push(x)
//                 })
//                 // let temp = []
//                 // columns.map()
                
//                 this.setState({r:true})
//                 this.setState({da:temp})
//             })
            
//         }
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Corr</h1>
//                     {
//                         this.state.r?<HeatMap
//                             xLabels={[this.state.lab]}
//                             yLabels={[1,1,1,1,1,1,1]}
//                             data={[[1,1],[2,3]]}
//                             height={100}
//                             cellStyle={(background, value, min, max, data, x, y) => ({
//                                     background: `rgba(66, 86, 244, ${1 - (max - value)*0.6 / (max - min)})`,
//                                     fontSize: "20px",
//                                 })
//                             }
//                             // cellRender={value => value && `${((value/CM.total)*100).toFixed(2)}%`}
//                         />:null}
//             </div>
//         )
//     }
// }
//
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
                // this.setState({series:myData1})

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
                      height: 350,
                      type: 'heatmap',
                    },
                    stroke: {
                      width: 0
                    },
                    plotOptions: {
                      heatmap: {
                        radius: 30,
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
                        colors: ['#fff']
                      }
                    },
                    xaxis: {
                        type: 'category',
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
