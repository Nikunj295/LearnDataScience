import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [algorithm, setAlgorithm] = React.useState('');
  
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
    </div>
  );
}
