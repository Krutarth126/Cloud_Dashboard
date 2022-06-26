import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../Assets/Images/logo.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import SelectAccount from "../utilities/SelectAccount";

function Index() {
  const options = [
    "tao-dashboard",
    "kpi-dashboard",
    "cid",
    "kudos",
    "trends-dashboard",
  ];
  const [value, setValue] = useState(options[2]);
  const handleSelect = (data) => {
    setValue(data);
  };
  return (
    <div style={{ position: "sticky", top: "0px", zIndex: "1000" }}>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img src={Logo} width="84" height="50" />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="d-flex">
              <span className="mt-2 mx-2">Select Dashboard</span>
              <div style={{ minWidth: "200px" }}>
                <Dropdown
                  options={options}
                  onChange={handleSelect}
                  value={value}
                  placeholder="Select an option"
                />
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <SelectAccount />
    </div>
  );
}

export default Index;
