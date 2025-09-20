import React, { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import RightSidebar from "../RightSidebar/RightSidebar";
import { useTheme as useCustomTheme } from "../../contexts/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const { isDarkMode } = useCustomTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header onMenuClick={handleSidebarToggle} />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            marginLeft: sidebarOpen ? "280px" : "0px",
            transition: "margin-left 0.3s ease",
            "@media (max-width: 1024px)": {
              marginLeft: "0px",
            },
          }}
        >
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              padding: {
                xs: "16px",
                sm: "20px",
                md: "24px",
              },
              backgroundColor: isDarkMode ? "#1a1a1a" : "#f5f5f5",
              minHeight: "calc(100vh - 80px)",
              transition: "background-color 0.3s ease",
              overflowX: "hidden",
            }}
          >
            {children}
          </Box>
          <RightSidebar />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
