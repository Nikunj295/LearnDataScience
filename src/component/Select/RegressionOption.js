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
  center: {
    [theme.breakpoints.down(500)]: {
      textAlign:'left',
      margin: theme.spacing(5),
    }
  },
})


class RegressionOption extends Component {
  state={
    algorithm:'linearRegression',
    rows:10,
    cols:2,
    cluster:2,
    ri:0,
    values:[],
    option:[]
  }
  
  ridge=()=>{
      return (
        <TextField className={this.props.classes.formControl} 
                 type="number"  
                 id="standard-basic" 
                 label="Alpha"
                 value={this.state.ri}
                 helperText=""
                 onChange={(e)=>this.setState({ri:e.target.value})}
        />  
      )
    }
  
    
  getData = ()=>{
    const {algorithm,rows,cols,cluster,ri} = this.state
      fetch(`http://127.0.0.1:5000/regression?algorithm=${algorithm}&rows=${rows}&cols=${cols}&clust=${cluster}&ridge=${ri}`)
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
        <div className={classes.center} >
          <FormControl className={classes.formControl}>
            <InputLabel id="algorithm">Algorithm</InputLabel>
            <Select
              labelId="algorithm"
              id="algorithm"
              value={this.state.algorithm}
              onChange={(e)=>this.setState({algorithm:e.target.value})}
            >
              <MenuItem value="linearRegression">Linear Regression</MenuItem>
              <MenuItem value="logisticRegression">Logistic Regression</MenuItem>
              <MenuItem value="ridge">Ridge Regression</MenuItem>
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
            this.state.algorithm==="ridge" ? this.ridge():
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

export default withStyles(useStyles)(RegressionOption)