import React, { useState } from "react";

interface TabsProps {
  TabsBtn: string[];
}

const Tabs: React.FC<TabsProps> = ({ TabsBtn }) => {
  const [activeTab, setActiveTab] = useState<string>(TabsBtn[0]);

  const renderContent = () => {
    switch (activeTab) {
      case "a":
        return <div>Content for A</div>;
      case "b":
        return <div>Content for B</div>;
      case "c":
        return <div>Content for C</div>;
      case "d":
        return <div>Content for D</div>;
      case "x":
        return <div>Content for X</div>;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <div>
      <div className="tab-buttons">
        {TabsBtn.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
