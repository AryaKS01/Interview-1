import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { BurgerMenu } from "./components/BurgerMenu";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://gwjj6.wiremockapi.cloud/json/1");
        const data = await response.json();
        setSidebarData(data.sidebar);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
      }
    };

    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      setIsSidebarOpen(!isMobileView);
    };

    handleResize();
    fetchData();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="app">
      <BurgerMenu toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
        data={sidebarData}
      />
      <div className={`content ${isSidebarOpen ? "shifted" : ""}`}></div>
    </div>
  );
}

export default App;
