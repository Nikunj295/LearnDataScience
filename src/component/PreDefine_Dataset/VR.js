import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Axios from "axios"
import AxisSelect, { AxisSelect2, Histo } from '../Select/AxisSelect';
import Lines from '../Charts/Lines/Lines';
import MultipeLines from '../Charts/Lines/MultipleLines';

import { Button } from '@material-ui/core'
import Example from '../Charts/Lines/SynchronizedLineChart';
import ScatterPlot1 from "../Charts/Scatterplot/ScatterPlot-with-trendline";
import Histogram from '../Charts/Histogram/Histogram';
import Boxplot from '../Charts/Boxplot/Boxplot';
import Areaplot from '../Charts/Area/Areaplot';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
    return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Visulization() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [result,setResult] = useState([])
  const [final,setFinal] = useState([])
  const [d,setD] = useState([])
  useEffect(() => {
        let id = localStorage.getItem('myid')
        let payload={
            id
        }    
        Axios.post("http://127.0.0.1:5000/visualize",null,{
            params:{
                payload
            }
        })
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
            setResult(myData)
            setFinal(myData1)
        })
    }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Lines"  {...a11yProps(0)} />
            <LinkTab label="Area"  {...a11yProps(1)} />
            <LinkTab label="TrendLine"  {...a11yProps(2)} />
            <LinkTab label="Multiple"  {...a11yProps(3)} />
            <LinkTab label="Histogram"  {...a11yProps(4)} />
            <LinkTab label="Box Plot"  {...a11yProps(5)} />
          </Tabs>
      </AppBar>
          <TabPanel value={value} index={0}>
            {
                result? <> <Lines values={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={1}>
            {
                result? <> <Areaplot values={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={2}>
            {
                result? <> <AxisSelect2 values={final}/><ScatterPlot1 data={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={3}>
            {
                result? <> <MultipeLines values={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={4}>
            {
                result? <>  <Histo values={final}/><Histogram values={final}/> </> :null
            }
          </TabPanel> 
          <TabPanel value={value} index={5}>
            {
                result? <> <Boxplot values={final}/> </> :null
            }
          </TabPanel> 

    </div>
  );
}
