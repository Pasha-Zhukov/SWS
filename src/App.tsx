import SideMenu from "./components/SideMenu/SideMenu";

import { Menu } from "./components/menu/Menu";
import { SubMenu } from "./components/subMenu/SubMenu";
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
