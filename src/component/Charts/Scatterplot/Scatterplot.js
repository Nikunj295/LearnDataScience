import React,{ useContext} from 'react'
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'
import { AxisContext } from "../files/Axis"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) =>({
    prog:{
        width:"800px",
        marginTop:"100px",
        [theme.breakpoints.down(500)]: {
            width: 400,
        }
    },
}))

function Scatterplot(props){
    
    const classes = useStyles();
    const {x,y,z} = useContext(AxisContext)
    const [x_axis,setX_axis] = x
    const [y_axis,setY_axis] = y
    const [tar,setTar] = z

    const groupBy=(arr, property)=>{
        return arr.reduce(function(memo, x) {
          if (!memo[x[property]]) { memo[x[property]] = []; }
          memo[x[property]].push(x);
          return memo;
        }, []);
    }
    
    const groupByObj=(arr, property)=>{        
        if(arr){
            return arr.reduce(function(memo, x) {
                if (!memo[x[property]]) { memo[x[property]] = []; }
                memo[x[property]].push(x);
                return memo;
            }, {});
        }
    }

    var points = groupBy(props.values, 'Predicted');
    var newArray = []        
    points.map(item=>{
        item.map(i=>{
            newArray.push({x: i[x_axis],y: i[y_axis],z: i[tar]})
        })
    });	
        

    var final = groupByObj(newArray, 'z');
    const arr = [ 'square','circle' , 'cross' ,'diamond' ,'star' , 'triangle' , 'wye']

    return (
        <div>    
        <Container maxWidth="lg">
        <div style={{ display:'flex', flexDirection:'column', alignContent:'center'}}>
        {
            props.values?<>
                <ScatterChart
                    width={window.innerWidth/1.6}
                    height={window.innerHeight/1.4}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="0" label={{ value: x_axis, position: 'bottom' }}/>
                    <YAxis type="number" dataKey="y" name="1" label={{ value: y_axis, angle: -90, position: 'left' }}/>
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    
                    <Legend verticalAlign="top" height={36}/>
                    {
                        Object.keys(final).map(function(key, index) {
                            return <Scatter name={key} data={final[key]} shape={""+arr[Math.floor(Math.random() * arr.length)]} fill={"#"+Math.floor(Math.random()*16777215).toString(16)}  />
                        })    
                    }
                </ScatterChart></>
            :
            <LinearProgress className={classes.prog} color="secondary"/>
        }  
        </div> 
        </Container>
        </div>
    )
}

export default Scatterplot
