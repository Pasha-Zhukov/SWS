import React from "react";
import "./Tab.style.scss";

interface TabProps {
  label: string;
  children?: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="tab-content">{children}</div>;
};

export default Tab;
