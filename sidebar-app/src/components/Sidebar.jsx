// Sidebar.js
import { useState } from "react";
import "./sidebar.css";

const SidebarItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.childs?.length > 0;

  return (
    <li style={{ "--level": level }}>
      <div
        className="sidebar-item"
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <span
            className="toggle-icon"
            style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
          >
            ▶
          </span>
        )}
        <span className="item-text">{item.title}</span>
      </div>
      {hasChildren && isOpen && (
        <ul>
          {item.childs.map((child, index) => (
            <SidebarItem key={index} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ isOpen, toggleSidebar, isMobile, data }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {isMobile && (
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            ×
          </button>
        </div>
      )}
      <ul className="sidebar-list">
        {data.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
