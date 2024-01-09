import React, { useState } from "react";
import "./Tabs.style.scss";

interface TabsProps {
  defaultActiveIndex?: number;
  children?: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children, defaultActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="tabs">
        {React.Children.map(children, (child, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              onClick={() => handleTabClick(index)}
              className={`tab ${isActive ? "active" : ""}`}
            >
              {React.isValidElement(child) && child.props.label}
            </div>
          );
        })}
      </div>
      <div>{React.Children.toArray(children)[activeIndex]}</div>
    </div>
  );
};

export default Tabs;
