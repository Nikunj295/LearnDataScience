import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}))

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [algorithm, setAlgorithm] = React.useState('');
    const [rows, setRows] = React.useState(10);
    const [cols, setCols] = React.useState(2);
    const [cluster, setCluster] = React.useState(2);
    const [kn, setKn] = React.useState(2);
    const [maxTree, setMaxTree] = React.useState(5);
    const [ntree, setNtree] = React.useState(30);
    const [kernel, setKernel] = React.useState('');
  
    const knear=()=>{
      return (
        <TextField className={classes.formControl} 
                 type="number" 
                 InputProps={{ inputProps: { min: 2 } }} 
                 id="standard-basic" 
                 label="Knear"
                 value={kn}
                 helperText="Number of Neighbour"
                 onChange={(e)=>setKn(e.target.value)}
        />  
      )
    }
    
    const dtree = () =>{
      return (
        <TextField className={classes.formControl} 
                 type="number" 
                 id="standard-basic" 
                 label="Max-depth"
                 value={maxTree}
                 helperText="Number of level of tree"
                 onChange={(e)=>setMaxTree(e.target.value)}
        />  
      )
    }
    const svm = () =>{
      return (
        <>
        <FormControl className={classes.formControl}>
          <InputLabel id="kernel">Kernel</InputLabel>
          <Select
            labelId="kernel"
            id="kernel"
            value={kernel}
            onChange={(e)=>setKernel(e.target.value)}
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

    const rtree=()=>{
      return (
        <TextField className={classes.formControl} 
                 type="number" 
                 InputProps={{ inputProps: { min: 10, max: 100 } }} 
                 id="standard-basic" 
                 label="No. of trees"
                 value={ntree}
                 helperText="Some important text"
                 onChange={(e)=>setNtree(e.target.value)}
        />  
      )
    }

    const handleChange = (event) => {
      setAlgorithm(event.target.value);
    };
    
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="algorithm">Algorithm</InputLabel>
        <Select
          labelId="algorithm"
          id="algorithm"
          value={algorithm}
          onChange={handleChange}
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
                 value={rows}
                 helperText="Some important text"
                 onChange={(e)=>setRows(e.target.value)}
      />
      <TextField className={classes.formControl} 
                 type="number" 
                 InputProps={{ inputProps: { min: 2, max: 50 } }} 
                 id="standard-basic" 
                 label="Columns" 
                 value={cols}
                 helperText="Some important text"
                 onChange={(e)=>setCols(e.target.value)}
      />
      
      <TextField className={classes.formControl} 
                 type="number" 
                 InputProps={{ inputProps: { min: 2, max: 10 } }} 
                 id="standard-basic" 
                 label="No. of Classification"
                 value={cluster}
                 helperText="How many class you want to distinguish?"
                 onChange={(e)=>setCluster(e.target.value)}
      />  
      
      {
        algorithm==="knear" ? knear():
        algorithm==="svm" ? svm():
        algorithm==="dtree" ? dtree():
        algorithm==="rtree" ? rtree():
        null
      }
      <ZoomPan options={options}/>
      <CustomPaginationActionsTable values={values}/>
      </div>
  );
}
