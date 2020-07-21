import React from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';

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
        pre.push({'name':i,value:item.length})
        i++
    })
    var count1 = groupBy(props.values,'Original')
    var og = []
    let j=0
    count1.map(item=>{
        og.push({'name':i,value:item.length})
        j++
    })
    
    return (
        <>
        <h3>Predicted</h3>
        <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={true} data={pre} 
                cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
            <Tooltip />
        </PieChart>
        <h3>Original</h3>
        <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={true} data={og} 
                cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
            <Tooltip />
        </PieChart>
        </>
    );
}

