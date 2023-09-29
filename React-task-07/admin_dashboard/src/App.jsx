import { Space } from "antd";
import "./App.css";
import AppHeader from "./AppHeader";
import SideMenu from "./SideMenu";
import PageContent from "./PageContent";
import AppFooter from "./AppFooter";
import { Bookprovider } from "./LibrayManagement/BookContex";

function App() {
  return (
    <Bookprovider>
      <div className="container">
        <div className="App">
          <AppHeader />
          <Space className="MenuAndContent">
            <SideMenu />
            <PageContent />
          </Space>
          <AppFooter />
        </div>
      </div>
    </Bookprovider>
  );
}

export default App;
