import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect, useRef } from "react";
import General from "./General";

interface ConfigurationsProps {
  currentTab: string;
  onClose: () => void;
}

export default function Configurations({
  currentTab,
  onClose,
}: ConfigurationsProps) {
  const [activeTab, setActiveTab] = useState("");
  const configRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        configRef.current &&
        !configRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    if (currentTab === "Setting") {
      setActiveTab("General");
    } else if (currentTab === "Profile") {
      setActiveTab("Profile");
    }
  }, [currentTab]);

  const navItems = [
    "General",
    "Account",
    "Chats",
    "Video & voice",
    "Notifications",
    "Personalization",
    "Storage",
    "Shortcuts",
    "Help",
  ];

  const icons = [
    "majesticons:monitor-line",
    "majesticons:key-line",
    "majesticons:chats-2",
    "majesticons:video-camera-line",
    "majesticons:bell-line",
    "majesticons:edit-pen-4-line",
    "majesticons:distribute-vertical-line",
    "majesticons:keyboard-line",
    "majesticons:information-circle-line",
  ];

  function handleClick(item: string) {
    setActiveTab(item);
  }

  return (
    <div
      ref={configRef}
      className="w-[500px] h-[550px] flex flex-row fixed left-16 bottom-3 shadow-[#232323] shadow-sm rounded-lg z-50"
    >
      <div className="w-[170px] h-full flex flex-col justify-between bg-[#2f2f2f] p-1 rounded-l-lg">
        <div className="flex flex-col gap-1 text-sm">
          {navItems.map((item, index) => (
            <div key={item} className="flex flex-col">
              <button
                onClick={() => handleClick(item)}
                className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-[#444444] ${
                  activeTab === item ? "bg-[#444444]" : ""
                }`}
              >
                <Icon icon={icons[index]} className="w-4 h-4" />
                <span>{item}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <button
            onClick={() => setActiveTab("Profile")}
            className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-[#444444] ${
              activeTab === "Profile" ? "bg-[#444444]" : ""
            }`}
          >
            <Icon icon="majesticons:user-circle" className="w-4 h-4" />
            <span>Profile</span>
          </button>
        </div>
      </div>
      <div className="w-[330px]">{activeTab === "General" && <General />}</div>
    </div>
  );
}
