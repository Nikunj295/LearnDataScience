import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Axios from "axios"
import HeatMap from "../Charts/HeatMap/HeatMap"
import AxisSelect, { AxisSelect2 ,Histo} from '../Select/AxisSelect';
import ScatterPlot from "../Charts/Scatterplot/Scatterplot";
import CustomActiveShapePieChart from "../Charts/PieChart/CustomActiveShapePieChart";
import Tree from '../Charts/Tree/Tree';
import Boxplot from '../Charts/Boxplot/Boxplot';
import Corr from '../Charts/HeatMap/Corr';
import ScatterPlot1 from "../Charts/Scatterplot/ScatterPlot-with-trendline";
import Histogram from '../Charts/Histogram/Histogram';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';

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
  head:{
    margin:'auto',
    textAlign:'center',
  }
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
            
            <Tab label="ScatterPlot"  {...a11yProps(0)} />
            <Tab label="TrendLine"  {...a11yProps(1)} />
            <Tab label="HeatMap"  {...a11yProps(2)} />
            <Tab label="PieChart"  {...a11yProps(3)} />
            <Tab label="Histogram"  {...a11yProps(4)} />
            <Tab label="Box Plot"  {...a11yProps(5)} />
            <Tab label="Correlation"  {...a11yProps(6)} />
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
              final? <> <h2 className={classes.head}>Scatter Plot </h2><AxisSelect values={final}/> <ScatterPlot values={final}/> </> : null
            }
          </TabPanel>
          <TabPanel value={value} index={1}>
            {
                result? <><h2 className={classes.head}>Trend Line of Regression</h2> <AxisSelect2 values={final}/><ScatterPlot1 data={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={2}>
            {
              result?<><h2 className={classes.head}>HeatMap Plot </h2><HeatMap values={final}/></>:null
            }
          </TabPanel>
          <TabPanel value={value} index={3}>
            {
              final?<> <h2 className={classes.head}>Pie Plot </h2><CustomActiveShapePieChart values={final} /></>:null
            }
          </TabPanel>
          <TabPanel value={value} index={4}>
            {
                result? <>  <h2 className={classes.head}>Histogram Plot </h2> <Histo values={final}/><Histogram values={final}/> </> :null
            }
          </TabPanel>
          <TabPanel value={value} index={5}>
            {
                result? <> <h2 className={classes.head}>Box Plot </h2> <Boxplot values={final}/> </> :null
            }
          </TabPanel> 
          <TabPanel value={value} index={6}>
            {
                result? <> <h2 className={classes.head}>Correlation Plot </h2> <Corr values={final}/> </> :null
            }
          </TabPanel> 
          <TabPanel value={value} index={7}>
            {
              algo==='dtree' || algo==="rtree"? final? <> <Tree/> </> : null: null
            }
          </TabPanel>
          </div>
          <hr style={{borderWidth: "5px"}}/>
          </Container>
        <Footer/>
    </div>
  );
}
