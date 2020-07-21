import React ,{ Component }from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core/styles"
import { AxisProvider } from '../Charts/files/Axis';

import axios from "axios"

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    [theme.breakpoints.down(500)]: {
      minWidth: 200,
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3),
  },
  mob: {
    [theme.breakpoints.down(500)]: {
      textAlign:'left',
      margin: theme.spacing(5),
    }
  },
})

class ClassificationOption extends Component {
  state={
    algorithm:'logisticRegression',
    rows:10,
    cols:2,
    cluster:2,
    kn:2,
    maxTree:5,
    ntree:20,
    kernel:'',
    values:[],
    values1:[],
    r:false
  }

  knear=()=>{
      return (
        <TextField className={this.props.classes.formControl} 
                 type="number" 
                 InputProps={{ inputProps: { min: 2 } }} 
                 id="standard-basic" 
                 label="Knear"
                 value={this.state.kn}
                 helperText="Number of Neighbour"
                 onChange={(e)=>this.setState({kn:e.target.value})}
        />  
      )
  }
  
  dtree = () =>{
      return (
        <TextField className={this.props.classes.formControl} 
                 type="number" 
                 id="standard-basic" 
                 label="Max-depth"
                 value={this.state.maxTree}
                 helperText="Number of level of tree"
                 onChange={(e)=>this.setState({maxTree:e.target.value})}
        />  
      )
  }

  rtree=()=>{
      return (
        <TextField className={this.props.classes.formControl} 
                 type="number" 
                 InputProps={{ inputProps: { min: 10, max: 100 } }} 
                 id="standard-basic" 
                 label="No. of trees"
                 value={this.state.ntree}
                 helperText="Some important text"
                 onChange={(e)=>this.setState({ntree:e.target.value})}
        />  
      )
  }
  
  groupBy=(arr, property)=>{
    return arr.reduce(function(memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, []);
  }

  groupByObj=(arr, property)=>{
    return arr.reduce(function(memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

  getRandomData = ()=>{
    const {algorithm,rows,cols,cluster,kn,maxTree,ntree} = this.state
      fetch(`http://127.0.0.1:5000/classification?algorithm=${algorithm}&rows=${rows}&cols=${cols}&clust=${cluster}&knear=${kn}&max_depth=${maxTree}&n_estimators=${ntree}`)
        .then(response=>response.json())
        .then(
            data => {
                var myData = Object.keys(data).map(key => {
                    return data[key];
                })
                this.setState({values:myData})
            })
    this.setState({r:true})
  }

  getToyData = () =>{
    axios.get('http://127.0.0.1:5000/classification/fetchData/iris')
    .then(response=>response.data)
        .then(data => {
                const tb = data[0]
                const ds = data[1]
                var myData = Object.keys(tb).map(key => {
                    return tb[key];
                })
                var myData1 = Object.keys(ds).map(key => {
                  return ds[key];
                })
                this.setState({values:myData})
                this.setState({values1:myData1})
        })
  }

  render(){
    const { classes } = this.props

    return (
    <> 
      <div className={classes.mob} >
        <AxisProvider>
          <FormControl className={classes.formControl}>
            <InputLabel id="algorithm">Algorithm</InputLabel>
            <Select
              labelId="algorithm"
              id="algorithm"
              value={this.state.algorithm}
              onChange={(e)=>this.setState({algorithm:e.target.value})}
            >
              <MenuItem value="logisticRegression">Logistic Classifier</MenuItem>
              <MenuItem value="knear">K-near Classifier</MenuItem>
              <MenuItem value="naive">Naive</MenuItem>
              <MenuItem value="dtree">Decision Tree Classifier</MenuItem>
              <MenuItem value="rtree">Random Forest Tree</MenuItem>
              <MenuItem value="svm">Support Vector Machine</MenuItem>
            </Select>
          </FormControl>
          <TextField className={classes.formControl} 
                    type="number" 
                    InputProps={{ inputProps: { min: 10, max: 100000 } }} 
                    id="standard-basic" 
                    label="Rows"
                    value={this.state.rows}
                    helperText="Some important text"
                    onChange={(e)=>this.setState({rows:e.target.value})}
          />
          <TextField className={classes.formControl} 
                    type="number" 
                    InputProps={{ inputProps: { min: 2, max: 50 } }} 
                    id="standard-basic" 
                    label="Columns" 
                    value={this.state.cols}
                    helperText="Some important text"
                    onChange={(e)=>this.setState({cols:e.target.value})}
          />    
          <TextField className={classes.formControl} 
                    type="number" 
                    InputProps={{ inputProps: { min: 2, max: 10 } }} 
                    id="standard-basic" 
                    label="No. of Classification"
                    value={this.state.cluster}
                    helperText="How many class you want to distinguish?"
                    onChange={(e)=>this.setState({cluster:e.target.value})}
          />       
          {
            this.state.algorithm==="knear" ? this.knear():
            this.state.algorithm==="dtree" ? this.dtree():
            this.state.algorithm==="rtree" ? this.rtree():
            null
          }
          <Button
            variant="contained"
            color="primary"
            onClick={this.getRandomData}
            className={classes.button}
          >Create</Button>
        </AxisProvider>
      </div>
    </>
    )
  }
}

export default withStyles(useStyles)(ClassificationOption)