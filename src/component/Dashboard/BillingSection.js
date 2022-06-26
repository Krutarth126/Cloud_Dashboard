import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BarGraph from "../utilities/BarGraph";
import LineChart from "../utilities/LineChart";
import PieChart from "../utilities/PieChart";
import UserTable from "../utilities/Table";

function BillingSection() {
  return (
    <div>
      <div className="billingSummary borderGrey">
        <h1>Billing Summary</h1>
      </div>
      <Container fluid>
        <Row className="borderGrey">
          <Col sm={6} className="borderGrey">
            <Row>
              <Col sm={4} className="borderGrey">
                <div>
                  <p>Previous Month Invoice</p>
                  <p>$583.04k</p>
                </div>
              </Col>
              <Col sm={4} className="borderGrey">
                <div>
                  <p>Invoiced Spend</p>
                  <p>4.75%</p>
                </div>
              </Col>
              <Col sm={4} className="borderGrey">
                <div>
                  <p>Invoiced Spend Forecast</p>
                  <p>$619.12K for Jun-22</p>
                </div>
              </Col>
            </Row>
            <div>
              <BarGraph title={"Invoiced Spend"} />
            </div>
            <div>
              <LineChart title={"Invoiced Forecast"} />
            </div>
            <div>
              <PieChart />
            </div>
          </Col>
          <Col>
            <Row className="borderGrey">
              <Col sm={4} className="borderGrey">
                <div>
                  <p>Previous Month Invoice</p>
                  <p>$583.04k</p>
                </div>
              </Col>
              <Col sm={4} className="borderGrey">
                <div>
                  <p>Previous Month Invoice</p>
                  <p>$583.04k</p>
                </div>
              </Col>
              <Col sm={4} className="borderGrey">
                <div>
                  <p>Previous Month Invoice</p>
                  <p>$583.04k</p>
                </div>
              </Col>
            </Row>
            <div>
              <BarGraph title={"Amortized Spend"} />
            </div>
            <div>
              <LineChart title={"Amortized Forecast"} />
            </div>
            <div>
              <PieChart />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="borderGrey">
        <div className="w-50">
          <h1>Insight: </h1>
        </div>
        <div className="w-50 ml-2">
          Total amount of discounts and chargeback is estimate until invoice is
          finalized. Invoice state for Previous Month (May-22): Not Finalized
        </div>
      </div>
      <div className="borderGrey">
        <UserTable />
      </div>
    </div>
  );
}

export default BillingSection;
