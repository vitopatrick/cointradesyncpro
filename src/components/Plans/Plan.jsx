import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import "./plan.css";
import BronzePlan from "./BronzePlan";
import SliverPlan from "./SliverPlan";
import GoldPlan from "./GoldPlan";
import PlatinumPlan from "./PlatinumPlan";

const TabPanel = ({ children, value, index }) => {
  return <Box>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</Box>;
};

const Plan = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="plan" id="plan">
        <div className="plan__container">
          <div className="plan__title">
            <h1 className="fw-bolder">Choose your Prefered Plan</h1>
            <p>Investment offer (30% ROI on all investment plans)</p>
          </div>
        </div>
      </div>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          centered
        >
          <Tab
            label="Bronze"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
          <Tab
            label="Sliver"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
          <Tab
            label="Gold"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
          <Tab
            label="Premium"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BronzePlan />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SliverPlan />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GoldPlan />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PlatinumPlan />
      </TabPanel>
    </>
  );
};

export default Plan;
