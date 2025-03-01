import { useState } from "react";

const mockData = {
  sidebar: [
    {
      type: "item",
      title: "Menu 1",
      childs: [
        {
          type: "item",
          title: "Sub Menu 1",
          childs: [
            {
              type: "item",
              title: "Nested Item 1.1",
              childs: [
                {
                  type: "item",
                  title: "Deep Item 1.1.1",
                  childs: [
                    {
                      type: "item",
                      title: "Deeper Item 1.1.1.1",
                      childs: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "item",
              title: "Nested Item 1.2",
              childs: [],
            },
          ],
        },
      ],
    },
    {
      type: "item",
      title: "Menu 1",
      childs: [
        {
          type: "item",
          title: "Sub Menu 1",
          childs: [
            {
              type: "item",
              title: "Nested Item 1",
              childs: [],
            },
            {
              type: "item",
              title: "Nested Item 2",
              childs: [],
            },
          ],
        },
        {
          type: "item",
          title: "Sub Menu 2",
          childs: [],
        },
      ],
    },
    {
      type: "item",
      title: "Menu 2",
      childs: [
        {
          type: "item",
          title: "Sub Menu 3",
          childs: [],
        },
      ],
    },
    {
      type: "item",
      title: "Menu 2",
      childs: [
        {
          type: "item",
          title: "Sub Menu 2.1",
          childs: [
            {
              type: "item",
              title: "Nested Item 2.1.1",
              childs: [],
            },
          ],
        },
      ],
    },
  ],
};

const SidebarItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.childs && item.childs.length > 0;

  return (
    <li style={{ "--level": level }}>
      {" "}
      {/* CSS variable for level */}
      <div
        className="sidebar-item"
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <span className="toggle-icon">{isOpen ? "▼" : "▶"}</span>
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

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
      </div>
      <ul className="sidebar-list">
        {mockData.sidebar.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
