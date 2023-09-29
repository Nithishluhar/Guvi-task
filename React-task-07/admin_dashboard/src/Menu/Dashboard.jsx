import React, { useEffect, useState, useContext } from "react";
import { Typography, Space, Card, Statistic, Table } from "antd";

import {
  FolderViewOutlined,
  FundProjectionScreenOutlined,
  IdcardOutlined,
  SaveOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <Card>
          <Space direction="horizontal">
            <SaveOutlined
              style={{ fontSize: 40, color: "blue", borderRadius: 20 }}
            />
            <Statistic title="Books" value={10}></Statistic>
          </Space>
        </Card>
        <Card>
          <Space direction="horizontal">
            <IdcardOutlined style={{ fontSize: 50, color: "gray" }} />
            <Statistic title="Author's" value={8}></Statistic>
          </Space>
        </Card>
        <Card>
          <Space direction="horizontal">
            <UserAddOutlined style={{ fontSize: 50, color: "violet" }} />
            <Statistic title="Users" value={12}></Statistic>
          </Space>
        </Card>
        <Card>
          <Space direction="horizontal">
            <FundProjectionScreenOutlined
              style={{ fontSize: 50, color: "green" }}
            />
            <Statistic title="Statistics" value={13}></Statistic>
          </Space>
        </Card>
      </Space>
      <Chart />
    </div>
  );
}

export default Dashboard;
