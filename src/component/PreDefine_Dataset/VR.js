import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Axios from "axios"
import { AxisSelect2, Histo } from '../Select/AxisSelect';
import Lines from '../Charts/Lines/Lines';
import MultipeLines from '../Charts/Lines/MultipleLines';
import ScatterPlot1 from "../Charts/Scatterplot/ScatterPlot-with-trendline";
import Histogram from '../Charts/Histogram/Histogram';
import Boxplot from '../Charts/Boxplot/Boxplot';
import Corr from '../Charts/HeatMap/Corr';
import Range1 from '../Charts/Area/Range';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import Tree from '../Charts/Tree/Tree';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Visulization() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [result,setResult] = useState([])
  const [final,setFinal] = useState([])
  const algo = sessionStorage.getItem('algo')
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
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab  label="Lines"  {...a11yProps(0)} />
            <Tab  label="TrendLine"  {...a11yProps(1)} />
            <Tab  label="Multiple"  {...a11yProps(2)} />
            <Tab  label="Histogram"  {...a11yProps(3)} />
            <Tab  label="Box Plot"  {...a11yProps(4)} />
            <Tab  label="Correlation"  {...a11yProps(5)} />
            <Tab  label="Range Area"  {...a11yProps(6)} />
            {
              algo==='dtree' || algo==="rtree"?
              <Tab label="Tree"  {...a11yProps(7)} />:null  
            }
          </Tabs>
      </AppBar>
      <Container maxWidth="lg">
      <div style={{margin:'auto'}}> 
          <TabPanel value={value} index={0}>
            {
                result? <> <Lines values={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={1}>
            {
                result? <> <AxisSelect2 values={final}/><ScatterPlot1 data={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={2}>
            {
                result? <> <MultipeLines values={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={3}>
            {
                result? <>  <Histo values={final}/><Histogram values={final}/> </> :null
            }
          </TabPanel> 
          <TabPanel value={value} index={4}>
            {
                result? <> <Boxplot values={final}/> </> :null
            }
          </TabPanel> 
          <TabPanel value={value} index={5}>
            {
                result? <> <Corr values={final}/> </> :null
            }
          </TabPanel> 
          <TabPanel value={value} index={6}>
            {
                result? <> <Range1 values={final}/> </> :null
            }
          </TabPanel> 
          <TabPanel value={value} index={7}>
            {
              algo==='dtree' || algo==="rtree"? final? <> <Tree/> </> : null: null
            }
          </TabPanel>
          </div>
      </Container>
      <Footer/>
    </div>
  );
}
