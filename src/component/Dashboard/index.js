import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import BillingSection from "./BillingSection";
import Loader from "../utilities/Loader";

function Index() {
  return (
    <div>
      <Tabs defaultActiveKey="billingSummary" id="uncontrolled-tab-example">
        <Tab eventKey="billingSummary" title="Billing Summary" className="mt-1">
          <BillingSection />
        </Tab>
        <Tab eventKey="costSummary" title="Cost Summary">
          <Loader />
        </Tab>
        <Tab eventKey="computeSummary" title="Compute Summary">
          <Loader />
        </Tab>
        <Tab eventKey="storageSummary" title="Storage Summary">
          <Loader />
        </Tab>
        <Tab eventKey="rispSummary" title="RI/SP Summary">
          <Loader />
        </Tab>
        <Tab eventKey="rispExp" title="Expring RI/SP Tracker">
          <Loader />
        </Tab>
        <Tab eventKey="momPivot" title="MoM Pivot">
          <Loader />
        </Tab>
        <Tab eventKey="summaryOfChanges" title="Summary Of Changes">
          <Loader />
        </Tab>
        <Tab eventKey="about" title="About">
          <Loader />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Index;
