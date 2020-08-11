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
import AxisSelect, { AxisSelect2 } from '../Select/AxisSelect';
import ScatterPlot from "../Charts/Scatterplot/Scatterplot";
import CustomActiveShapePieChart from "../Charts/PieChart/CustomActiveShapePieChart";
import Tree from '../Charts/Tree/Tree';



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
            <LinkTab label="HeatMap"  {...a11yProps(0)} />
            <LinkTab label="PieChart"  {...a11yProps(1)} />
            <LinkTab label="ScatterPlot"  {...a11yProps(2)} />
            <LinkTab label="Tree"  {...a11yProps(3)} />
          </Tabs>
      </AppBar>
          <TabPanel value={value} index={0}>
            {
              result?<HeatMap values={final}/>:null
            }
          </TabPanel>
          <TabPanel value={value} index={1}>
            {
              final? <CustomActiveShapePieChart values={final} />:null
            }
          </TabPanel>
          <TabPanel value={value} index={2}>
            {
              final? <> <AxisSelect values={final}/> <ScatterPlot values={final}/> </> : null
            }
          </TabPanel>
          <TabPanel value={value} index={3}>
            {
              final? <> <Tree/> </> : null
            }
          </TabPanel>

    </div>
  );
}
