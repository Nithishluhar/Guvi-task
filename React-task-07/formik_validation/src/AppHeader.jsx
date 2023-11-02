import React from "react";
import { Image, Space, Typography,Badge } from "antd";
import { InboxOutlined, MessageOutlined } from '@ant-design/icons';

function AppHeader() {
  return (
    
    <div className="AppHeader">
      <Image
        src="https://play-lh.googleusercontent.com/1UFtOJsYbMV7ZsgXLNQThdoMCBeb4YJqqAfE0xVSUhMIogVXuFbNfes5Eo02BQuqMJg=s256-rw"
        width={40}
      />
      <Typography.Title>Admin Libary</Typography.Title>
      <Space>
        <Badge count = {10} dot>
        <InboxOutlined style={{ fontSize: '25px', color: '#08c' }} theme="outlined"/>
        </Badge>
        <Badge count = {1}>
        <MessageOutlined type="message" style={{ fontSize: '20px', color: '#08c' }} theme="outlined" />
        </Badge>
          
      </Space>
    </div>
    
  );
}

export default AppHeader;
