import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Configurations from "./Configurations";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("");
  const [showConfigurations, setShowConfigurations] = useState(false);

  const navItems = [
    "Starred messages",
    "Archieved chats",
    "Setting",
    "Profile",
  ];

  const icons = [
    "majesticons:star-line",
    "majesticons:inbox-line",
    "majesticons:settings-cog-line",
    "majesticons:user-circle",
  ];

  const handleTabClick = (item: string) => {
    setActiveTab(item);
    if (item === "Setting" || item === "Profile") {
      setShowConfigurations(true);
    } else {
      setShowConfigurations(false);
    }
  };

  function handleClose() {
    setShowConfigurations(false);
    setActiveTab("");
  }

  return (
    <div className="flex flex-col justify-between h-screen w-fit p-1 bg-[#202020]">
      <div>dw</div>
      <div className="flex flex-col items-center gap-1 w-fit">
        {navItems.map((item, index) => (
          <div key={item} className="flex flex-col items-center">
            <button
              onClick={() => handleTabClick(item)}
              className={`px-3 py-2 rounded hover:bg-[#2c2c2c] ${
                activeTab === item ? "bg-[#2c2c2c]" : ""
              }`}
            >
              <Icon icon={icons[index]} className="w-5 h-5" />
            </button>
            {index === 1 && <hr className="h-2 w-8 mt-3 opacity-50" />}
          </div>
        ))}
      </div>
      {showConfigurations && (
        <Configurations currentTab={activeTab} onClose={() => handleClose()} />
      )}
    </div>   
  );
}
