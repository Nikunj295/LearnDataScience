import React from 'react'
import HeatMap from "react-heatmap-grid"
import ConfusionMatrix from 'ml-confusion-matrix';

function HMap(props) {

    var target = []
    var Predicted = []
    var CM = []
    var CM2 = []

    const groupBy=(arr, property)=>{
        return arr.reduce(function(memo, x) {
          if (!memo[x[property]]) { memo[x[property]] = []; }
          memo[x[property]].push(x);
          return memo;
        }, []);
    }

    const compare_item = (a, b)=>{
        if(a.target < b.target){
                return -1;
        }else if(a.target > b.target){
                return 1;
        }else{
                return 0;
        }
    }
    
    
    var check = false
    if(props.values.length!==0){
        console.log(props.values)
        check = true
        const some = props.values.map(({target, Predicted}) => ({target, Predicted}))
        some.sort(compare_item)

        //Normal Mode
        target = some.map(item=>item.target)
        Predicted = some.map(item=>item.Predicted)
        CM = ConfusionMatrix.fromLabels(target,Predicted)   

        //Percentage Mode
        var newArray = []
        some.map(i=>{
            newArray.push({'target': `${(i['target']/some.length)*100}%`,"Predicted": `${(i['Predicted']/some.length)*100}%`})
        })
        
        target = newArray.map(item=>item.target)
        Predicted = newArray.map(item=>item.Predicted)
        CM2 = ConfusionMatrix.fromLabels(target,Predicted)   

    }

    return (
        <div>
            
            <h1>HEATMAP</h1>
            {
                check?
                <>
                <div style={{width:'500px',
                            display:'inline-block',
                            }}
                >
                    <HeatMap
                        xLabels={CM.labels}
                        yLabels={CM.labels}
                        data={CM.matrix}
                        height={100}
                        cellStyle={(background, value, min, max, data, x, y) => ({
                                background: `rgba(66, 86, 244, ${1 - (max - value)*0.6 / (max - min)})`,
                                fontSize: "20px",
                            })
                        }
                        cellRender={value => value && `${((value/CM.total)*100).toFixed(2)}%`}
                    />
                </div> 
                <div style={{width:'500px',
                            display:'inline-block',
                            }}
                >
                    <HeatMap
                        xLabels={CM.labels}
                        yLabels={CM.labels}
                        data={CM.matrix}
                        height={100}
                        cellStyle={(background, value, min, max, data, x, y) => ({
                                background: `rgba(66, 86, 244, ${1 - (max - value)*0.6 / (max - min)})`,
                                fontSize: "20px",
                            })
                        }
                        cellRender={value => value && `${value}`}
                    />
                </div>
                </>
            :null
            }

        </div>
    )
}

export default HMap