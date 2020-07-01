import React ,{ Component }from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import CustomPaginationActionsTable from "../Tables/Table";
import { withStyles } from "@material-ui/core/styles"

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3),
  },
})

class ControlledOpenSelect extends Component {
  state={
    algorithm:'',
    rows:10,
    cols:2,
    cluster:2,
    kn:2,
    maxTree:null,
    ntree:20,
    kernel:'',
    values:[],
    option:[]
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

  svm = () =>{
      return (
        <>
        <FormControl className={this.props.classes.formControl}>
          <InputLabel id="kernel">Kernel</InputLabel>
          <Select
            labelId="kernel"
            id="kernel"
            value={this.state.kernel}
            onChange={(e)=>this.setState({kernel:e.target.value})}
          >
            <MenuItem value="linear">Linear</MenuItem>
            <MenuItem value="poly">Polynomial</MenuItem>
            <MenuItem value="rbf">Radial Basis Function</MenuItem>
            <MenuItem value="sigmoid">Sigmoid</MenuItem>
          </Select>
        </FormControl>
        </>  
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
    
    getData = ()=>{
      fetch("http://127.0.0.1:5000/classification")
        .then(response=>response.json())
        .then(
            data => {
                var myData = Object.keys(data).map(key => {
                    return data[key];
                })
                this.setState({values:myData})
                const newArray = [];
                this.state.values.map(i=>{
                    newArray.push({y: i['0']});
                });	
                const options = {
                    theme: "light2", // "light1", "dark1", "dark2"
                    animationEnabled: true,
                    zoomEnabled: true,
                    title: {
                        text: "Try Zooming and Panning"
                    },
                    axisY: {
                        includeZero: false
                    },
                    data: [{
                        type: "area",
                        dataPoints: newArray
                    }]
                }
                this.setState({options})
          })
    }
    
    render(){
      const { classes } = this.props
      return (
        <div>
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
            this.state.algorithm==="svm" ? this.svm():
            this.state.algorithm==="dtree" ? this.dtree():
            this.state.algorithm==="rtree" ? this.rtree():
            null
          }
          <Button
            variant="contained"
            color="primary"
            onClick={this.getData}
            className={classes.button}
          >
            Create
          </Button>
          <CustomPaginationActionsTable values={this.state.values}/>
        </div>
    )
  }
}

export default withStyles(useStyles)(ControlledOpenSelect)