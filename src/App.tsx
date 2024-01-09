import SideMenu from "./SideMenu/SideMenu";

import { Menu } from "./menu/Menu";
import { SubMenu } from "./subMenu/SubMenu";
import { MainContent } from "./mainContent/MainContent";

import "./App.css";

function App() {
  const menuItems = ["По проекту", "Объекты", "РД", "График"];
  return (
    <>
      <Menu />
      <SubMenu />
      <div className="body-content">
        <div className="side-menu-wrapper">
          <SideMenu items={menuItems} />
        </div>
        <MainContent />
      </div>
    </>
  );
}

export default App;
