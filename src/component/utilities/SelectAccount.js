import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import Select from "react-select";

const options = [
  { value: "All", label: "Select All" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
  { value: "12345678", label: "12345678" },
];

function SelectAccount() {
  const [value, setValue] = useState(options[0]);
  function handleChange(data) {
    setValue(data);
  }

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Controls Account ID:{value?.value}
          </Accordion.Header>
          <Accordion.Body>
            <div className="w-25">
              <Select
                value={value}
                onChange={handleChange}
                options={options}
                placeholder="Select Account Id"
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default SelectAccount;
