import React from 'react';
import CanvasJSReact from '../files/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const groupBy=(arr, property)=>{
    return arr.reduce(function(memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, []);
}

export default function CustomActiveShapePieChart (props) {
    
    var count = groupBy(props.values,'Predicted')
    var pre = []
    let i=0
    count.map(item=>{
        pre.push({'label':i,y:item.length})
        i++
    })
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Predicted"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}times",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}times",
            dataPoints: pre
        }]
    }

    var count1 = groupBy(props.values,'target')
    var og = []
    let j=0
    count1.map(item=>{
        og.push({'label':j,y:item.length})
        j++
    })
    
    const options1 = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Target"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}times",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}times",
            dataPoints: og
        }]
    }


    return (
        <>
            <CanvasJSChart options = {options}/>
            <br/>
            <br/>
            <br/>
            <CanvasJSChart options = {options1}/>
        </>
    );
}

