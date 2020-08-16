import React, { useState, useContext } from 'react'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import {AxisContext}  from "../Charts/files/Axis"
import TextField from "@material-ui/core/TextField"
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
      [theme.breakpoints.down(500)]: {
        minWidth: 200,
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
}))

function AxisSelect(props){
    var temp = sessionStorage.getItem('train')
    const columns = temp.split(",")
    const [x_axe,setX_axe] = useState("")
    const [y_axe,setY_axe] = useState("")
    const [tg,setTG] = useState("Predicted")

    const {x,y,z} = useContext(AxisContext)
    const [x_axis,setX_axis] = x
    const [y_axis,setY_axis] = y
    const [tar,setTar] = z

    const updateX = (e) => {
        e.preventDefault()
        setX_axe(e.target.value)
        sessionStorage.setItem('lineX',e.target.value)
        setX_axis(e.target.value)
    }
    const updateY = (e) => {
        e.preventDefault()
        setY_axe(e.target.value)
        sessionStorage.setItem('lineY',e.target.value)
        setY_axis(e.target.value)
    }
    const updateTg = (e) => {
        e.preventDefault()
        setTG(e.target.value)
        sessionStorage.setItem('target',e.target.value)
        setTar(e.target.value)
    }

    const classes = useStyles();
    return (
        <div >
        <Container maxWidth="lg">
        <div style={{display:'flex', flexDirection:'row', justifyContent :'center'}}>
            <FormControl className={classes.formControl}>
                <InputLabel id="x">X-axis</InputLabel>
                <Select
                    labelId="x"
                    id="x"
                    value={x_axe}
                    onChange={(e)=>updateX(e)}
                >
                    {
                        columns.map(item=>{
                            return <MenuItem name="xaxe" value={item}>{item}</MenuItem>        
                        })
                    }
                </Select>
            </FormControl>  
            <FormControl className={classes.formControl}>  
                <InputLabel id="y">Y-axis</InputLabel>
                <Select
                    labelId="y"
                    id="y"
                    value={y_axe}
                    onChange={(e)=>updateY(e)}
                >
                    {
                        columns.map(item=>{
                        return <MenuItem name="yaxe" value={item}>{item}</MenuItem>        
                        })
                    }                
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>  
                <InputLabel id="tar">Points</InputLabel>
                <Select
                    labelId="tar"
                    id="tar"
                    value={tg}
                    onChange={(e)=>updateTg(e)}
                >
                    <MenuItem name="tg" value="Predicted">Predicted</MenuItem>
                    <MenuItem name="tg" value="target">Target</MenuItem>
                </Select>
            </FormControl>
            </div>
            </Container>
        </div>
    )
}

export function AxisSelect2(props){
    var temp = sessionStorage.getItem('train')
    const columns = temp.split(",")

    const [x_axe,setX_axe] = useState(columns[0])
    const [tg,setTG] = useState("Predicted")

    const {x,z} = useContext(AxisContext)
    const [x_axis,setX_axis] = x
    const [tar,setTar] = z

    
    const updateX = (e) => {
        e.preventDefault()
        setX_axe(e.target.value)
        setX_axis(e.target.value)
        sessionStorage.setItem('lineX',e.target.value)
    }
    const updateTg = (e) => {
        e.preventDefault()
        setTG(e.target.value)
        setTar(e.target.value)
        sessionStorage.setItem('target',e.target.value)
    }
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg">
            <div style={{display:'flex', flexDirection:'row', justifyContent :'center'}}>
        
            <FormControl className={classes.formControl}>
                <InputLabel id="x">X-axis</InputLabel>
                <Select
                    labelId="x"
                    id="x"
                    value={x_axe}
                    onChange={(e)=>updateX(e)}
                >
                    {
                        columns.map(item=>{
                            return <MenuItem name="xaxe" value={item}>{item}</MenuItem>        
                        })
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>  
                <InputLabel id="tar">Points</InputLabel>
                <Select
                    labelId="tar"
                    id="tar"
                    value={tg}
                    onChange={(e)=>updateTg(e)}
                >
                    <MenuItem name="tg" value="Predicted">Predicted</MenuItem>
                    <MenuItem name="tg" value="target">Original</MenuItem>
                </Select>
            </FormControl>
            </div>
            </Container>
        </div>
    )
}

export function Histo(props){
    var temp = sessionStorage.getItem('train')
    let columns = temp.split(",")

    const [x_axe,setX_axe] = useState(columns[0])
    const [bin,setBin] = useState()

    const {x,b} = useContext(AxisContext)
    const [x_axis,setX_axis] = x
    const [bins,setBins] = b

    columns.push('target')
    columns.push('Predicted')

    const updateX = (e) => {
        e.preventDefault()
        setX_axe(e.target.value)
        setX_axis(e.target.value)
    }
    const updateBin = (e) => {
        e.preventDefault()
        setBins(e.target.value)
        setBin(e.target.value)
    }
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg">
            <div style={{display:'flex', flexDirection:'row', justifyContent :'center'}}>
        
            <FormControl className={classes.formControl}>
                <InputLabel id="x">X-axis</InputLabel>
                <Select
                    labelId="x"
                    id="x"
                    value={x_axe}
                    onChange={(e)=>updateX(e)}
                >
                    {
                        columns.map(item=>{
                            return <MenuItem name="xaxe" value={item}>{item}</MenuItem>        
                        })
                    }
                </Select>
            </FormControl>
            <TextField className={classes.formControl} 
                    type="number" 
                    InputProps={{ inputProps: { min: 10, max: 100000 } }} 
                    id="standard-basic" 
                    label="Bins"
                    value={bin}
                    helperText="Bins: Number of Distribution"
                    onChange={(e)=>updateBin(e)}
            />
            </div>
            </Container>
        </div>
    )
}

export default AxisSelect
