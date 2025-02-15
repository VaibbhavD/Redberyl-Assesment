import React, { useState } from "react";
import { tabs } from "../../utils/Constant";
import OrderDetailsTab from "./OrderDetailsTab";

const TabHeader = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Order Detail":
        return <div><OrderDetailsTab /></div>;
      case "Order Requirements":
        return <div>Order Requirements Content</div>;
      case "Contacts":
        return <div>Contacts Content</div>;
      case "Documents":
        return <div>Documents Content</div>;
      case "Status History":
        return <div>Status History Content</div>;
      case "Account Manager":
        return <div>Account Manager Content</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 border-b-2 ${activeTab === tab
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default TabHeader;
