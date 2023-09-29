import { Menu } from "antd";
import React from "react";
import {useNavigate} from "react-router-dom"
import { AppstoreOutlined, DatabaseOutlined, DiffOutlined, UsergroupAddOutlined } from '@ant-design/icons';

function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu style={{ fontSize: '16px', color: 'black' }}
      onClick={(items) =>{
        navigate (items.key)
      }}
        items={[
          {
            label: "Dashboard ",
            key: "/",
            icon: <AppstoreOutlined  style={{ fontSize : 20, color: "green" }}/>
          },
          {
            label: "Manage Books",
            key: "/manageBooks",
            icon: <DatabaseOutlined style={{ fontSize : 20, color: "green" }}/>
          }, {
            label: "Manage Authors  ",
            key: "/manageAuthors",
            icon: <UsergroupAddOutlined style={{ fontSize : 20, color: "green" }}/>

          }, {
            label: "Create (+)",
            key: "/addBooksAuthor",
            icon: <DiffOutlined style={{ fontSize : 20, color: "green" }}/>

          }
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
