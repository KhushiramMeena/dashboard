import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Folder as FolderIcon,
  Person as PersonIcon,
  Campaign as CampaignIcon,
  Description as DescriptionIcon,
  People as PeopleIcon,
  ExpandLess,
  ExpandMore,
  Star as StarIcon,
  History as HistoryIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { motion } from "framer-motion";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const [expandedItems, setExpandedItems] = React.useState<{
    [key: string]: boolean;
  }>({
    dashboards: true,
    pages: true,
  });

  const handleExpandClick = (item: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleItemClick = (path: string) => {
    // Only navigate to specific routes
    if (path === "/" || path === "/orders") {
      navigate(path);
    }
    // For other paths, just show a console message or do nothing
    else {
      console.log(`Clicked on ${path} - No navigation`);
    }
  };

  const isSpecialItem = (text: string) => {
    return text === "Overview" || text === "Order List";
  };

  const menuItems = [
    {
      title: "Favorites",
      items: [
        { text: "Overview", icon: <StarIcon />, path: "/" },
        { text: "Projects", icon: <FolderIcon />, path: "/projects" },
      ],
    },
    {
      title: "Recently",
      items: [
        { text: "Recent Activity", icon: <HistoryIcon />, path: "/recent" },
      ],
    },
    {
      title: "Dashboards",
      expandable: true,
      items: [
        {
          text: "Default",
          icon: <DashboardIcon />,
          path: "/default",
          active: true,
        },
        { text: "eCommerce", icon: <ShoppingCartIcon />, path: "/ecommerce" },
        { text: "Order List", icon: <DescriptionIcon />, path: "/orders" },
      ],
    },
    {
      title: "Pages",
      expandable: true,
      items: [
        { text: "User Profile", icon: <PersonIcon />, path: "/profile" },
        { text: "Projects", icon: <FolderIcon />, path: "/projects" },
        { text: "Campaigns", icon: <CampaignIcon />, path: "/campaigns" },
        { text: "Documents", icon: <DescriptionIcon />, path: "/documents" },
        { text: "Followers", icon: <PeopleIcon />, path: "/followers" },
      ],
    },
    {
      title: "Account",
      expandable: true,
      items: [],
    },
    {
      title: "Corporate",
      expandable: true,
      items: [],
    },
    {
      title: "Blog",
      expandable: true,
      items: [],
    },
    {
      title: "Social",
      expandable: true,
      items: [],
    },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        backgroundColor: isDarkMode ? "#2d2d2d" : "#ffffff",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Menu Items - Scrollable */}
      <Box
        sx={{
          padding: "16px 0",
          flexGrow: 1,
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: isDarkMode ? "#404040" : "#f1f1f1",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: isDarkMode ? "#666" : "#c1c1c1",
            borderRadius: "3px",
            "&:hover": {
              backgroundColor: isDarkMode ? "#888" : "#a8a8a8",
            },
          },
        }}
      >
        {menuItems.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ marginBottom: "8px" }}>
            {/* Section Title */}
            <Box sx={{ padding: "8px 20px" }}>
              <Typography
                variant="body2"
                sx={{
                  color: isDarkMode ? "#b0b0b0" : "#666",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {section.title}
              </Typography>
            </Box>

            {/* Section Items */}
            {section.items && section.items.length > 0 && (
              <List sx={{ padding: 0 }}>
                {section.items.map((item, itemIndex) => {
                  const isSpecial = isSpecialItem(item.text);
                  const isActive = location.pathname === item.path;

                  return (
                    <ListItem key={itemIndex} disablePadding>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: itemIndex * 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileHover={
                          isSpecial
                            ? {
                                scale: 1.05,
                                transition: { duration: 0.2 },
                              }
                            : {}
                        }
                        style={{ width: "100%" }}
                      >
                        <ListItemButton
                          onClick={() => handleItemClick(item.path)}
                          sx={{
                            padding: isSpecial ? "12px 20px" : "8px 20px",
                            margin: "2px 12px",
                            borderRadius: isSpecial ? "12px" : "8px",
                            backgroundColor: isSpecial
                              ? isActive
                                ? isDarkMode
                                  ? "linear-gradient(135deg, #404040 0%, #4a4a4a 100%)"
                                  : "linear-gradient(135deg, #f0f7ff 0%, #e3f2fd 100%)"
                                : isDarkMode
                                ? "linear-gradient(135deg, #2d2d2d 0%, #333333 100%)"
                                : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"
                              : isActive
                              ? isDarkMode
                                ? "#404040"
                                : "#f0f7ff"
                              : "transparent",
                            borderLeft: isSpecial
                              ? isActive
                                ? "4px solid #1976d2"
                                : "4px solid transparent"
                              : isActive
                              ? "3px solid #1976d2"
                              : "3px solid transparent",
                            border: isSpecial
                              ? isActive
                                ? "1px solid #1976d2"
                                : "1px solid transparent"
                              : "none",
                            boxShadow: isSpecial
                              ? isActive
                                ? "0 4px 12px rgba(25, 118, 210, 0.3)"
                                : "0 2px 8px rgba(0, 0, 0, 0.1)"
                              : "none",
                            "&:hover": {
                              backgroundColor: isSpecial
                                ? isDarkMode
                                  ? "linear-gradient(135deg, #333333 0%, #404040 100%)"
                                  : "linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)"
                                : isDarkMode
                                ? "#333333"
                                : "#f5f5f5",
                              boxShadow: isSpecial
                                ? "0 6px 16px rgba(0, 0, 0, 0.15)"
                                : "none",
                              transform: isSpecial
                                ? "translateY(-2px)"
                                : "none",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: "40px",
                              color: isSpecial
                                ? isActive
                                  ? "#1976d2"
                                  : isDarkMode
                                  ? "#ffffff"
                                  : "#1976d2"
                                : isActive
                                ? "#1976d2"
                                : isDarkMode
                                ? "#b0b0b0"
                                : "#666",
                              fontSize: isSpecial ? "20px" : "18px",
                            }}
                          >
                            {isSpecial ? (
                              <motion.div
                                animate={
                                  isActive
                                    ? {
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1],
                                      }
                                    : {}
                                }
                                transition={{
                                  duration: 0.6,
                                  repeat: isActive ? Infinity : 0,
                                  repeatDelay: 2,
                                }}
                              >
                                {item.icon}
                              </motion.div>
                            ) : (
                              item.icon
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.text}
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: isSpecial ? "15px" : "14px",
                                fontWeight: isSpecial
                                  ? isActive
                                    ? 700
                                    : 600
                                  : isActive
                                  ? 600
                                  : 400,
                                color: isSpecial
                                  ? isActive
                                    ? "#1976d2"
                                    : isDarkMode
                                    ? "#ffffff"
                                    : "#1976d2"
                                  : isActive
                                  ? "#1976d2"
                                  : isDarkMode
                                  ? "#ffffff"
                                  : "#333",
                                textShadow:
                                  isSpecial && isActive
                                    ? "0 1px 2px rgba(0, 0, 0, 0.1)"
                                    : "none",
                              },
                            }}
                          />
                          {isSpecial && (
                            <motion.div
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: "#1976d2",
                                marginLeft: "8px",
                              }}
                            />
                          )}
                        </ListItemButton>
                      </motion.div>
                    </ListItem>
                  );
                })}
              </List>
            )}

            {/* Expandable sections */}
            {section.expandable && (
              <Box sx={{ padding: "8px 20px" }}>
                <Box
                  onClick={() => handleExpandClick(section.title.toLowerCase())}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: isDarkMode ? "#333333" : "#f5f5f5",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      flexGrow: 1,
                      fontSize: "14px",
                      fontWeight: 500,
                      color: isDarkMode ? "#ffffff" : "#333",
                    }}
                  >
                    {section.title}
                  </Typography>
                  {expandedItems[section.title.toLowerCase()] ? (
                    <ExpandLess
                      sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                    />
                  ) : (
                    <ExpandMore
                      sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                    />
                  )}
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: {
              xs: 280,
              sm: 280,
              md: 280,
            },
            borderRight: isDarkMode ? "1px solid #404040" : "1px solid #e0e0e0",
            top: {
              xs: "64px",
              sm: "72px",
              md: "80px",
            },
            height: {
              xs: "calc(100vh - 64px)",
              sm: "calc(100vh - 72px)",
              md: "calc(100vh - 80px)",
            },
            transition: "all 0.3s ease",
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: {
              xs: 280,
              sm: 320,
              md: 360,
            },
            top: {
              xs: "64px",
              sm: "72px",
              md: "80px",
            },
            height: {
              xs: "calc(100vh - 64px)",
              sm: "calc(100vh - 72px)",
              md: "calc(100vh - 80px)",
            },
            transition: "all 0.3s ease",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
