import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Role from '../../components/HomepageComponent/components/Role';
import EvalitTests from '../../components/HomepageComponent/components/EvalitTests';
import Settings from '../../components/HomepageComponent/components/Settings';
import Share from '../../components/HomepageComponent/components/Share';
import posed from 'react-pose';
const Text = posed.div({
  enter: {
    delay: 500,
    opacity: 1,
    transition: { type: 'spring', stiffness: 20 },
    y: 0,
  },
  exit: {
    delay: 500,
    opacity: 0,
    y: 80,
  },
});
const chapters = [
  {
    title: 'Role',
    content: <Role />,
  },
  {
    title: 'Evalit Tests',
    content: <EvalitTests />,
  },
  {
    title: 'Settings',
    content: <Settings />,
  },
  {
    title: 'Share',
    content: <Share />,
  },
];
const chapterAmount = chapters.length;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const ref = useRef(null);
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };


  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <div className="w-full">
          <Tabs
            value={value}
            onChange={handleChange}
            color="primary"
            variant="fullWidth"
            className="w-[90%] mx-auto"
            centered
            TabIndicatorProps={{
              style: {
                backgroundColor:
                  value === 0
                    ? '#493AA4'
                    : value === 1
                    ? '#A96C25'
                    : value === 2
                    ? '#35C2B1'
                    : '#4BD834',
                width: '15%',
                transform: 'translateX(35%)',
              },
            }}
          >
            <Tab label="Role" {...a11yProps(0)} />
            <Tab label="Evalit Tests" {...a11yProps(1)} />
            <Tab label="Settings" {...a11yProps(2)} />
            <Tab label="Share" {...a11yProps(3)} />
          </Tabs>
        </div>
      </div>
      <div className="w-full lg:container">
        <Box ref={ref}>
          {chapters.map((chapter, index) => (
            <Text pose={chapter.title ? 'enter' : 'exit'}>
              <TabPanel value={value} index={index} key={index}>
                {chapter.content}
              </TabPanel>
            </Text>
          ))}
        </Box>
      </div>
    </>
  );
}
