import React, { useState } from "react";

type Tab = "profile" | "settings" | "notifications";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <div>프로필 내용</div>;
      case "settings":
        return <div>설정 내용</div>;
      case "notifications":
        return <div>알림 내용</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("profile")}
          className={activeTab === "profile" ? "active" : ""}
        >
          프로필
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={activeTab === "settings" ? "active" : ""}
        >
          설정
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={activeTab === "notifications" ? "active" : ""}
        >
          알림
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
