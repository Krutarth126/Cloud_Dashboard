import React from "react";
import Table from "rc-table";
import data from "../../Assets/DummyData/User";
import "rc-table/assets/index.css";

function UserTable() {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "first Name",
      dataIndex: "first_name",
      key: "first_name",
      width: 100,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      width: 100,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 100,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: 250,
    },
    {
      title: "IP Address",
      dataIndex: "ip_address",
      key: "ip_address",
      width: 200,
    },
  ];
  return (
    <div className="my-5">
      <h1>User Information Table</h1>
      <div className="d-flex justify-content-center">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

export default UserTable;
