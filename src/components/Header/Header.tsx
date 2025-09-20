import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Breadcrumbs,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Folder as FolderIcon,
  Star as StarIcon,
  WbSunny as SunIcon,
  DarkMode as DarkModeIcon,
  History as HistoryIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const getBreadcrumbs = () => {
    if (location.pathname === "/") {
      return ["Dashboards", "Default"];
    } else if (location.pathname === "/orders") {
      return ["Dashboards", "Order List"];
    }
    return ["Dashboards", "Default"];
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: isDarkMode ? "#2d2d2d" : "#ffffff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        borderBottom: isDarkMode ? "1px solid #404040" : "1px solid #e0e0e0",
        height: {
          xs: "64px",
          sm: "72px",
          md: "80px",
        },
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <Toolbar sx={{
        height: "100%",
        padding: {
          xs: "0 16px",
          sm: "0 20px",
          md: "0 24px",
        },
        minHeight: "auto",
      }}>
        {/* Left side - ByeWind logo, Menu button and breadcrumbs */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          {/* ByeWind Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: isDarkMode ? "#ffffff" : "#1976d2",
              fontSize: {
                xs: "18px",
                sm: "20px",
                md: "24px",
              },
              marginRight: {
                xs: "12px",
                sm: "16px",
                md: "24px",
              },
            }}
          >
            ByeWind
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{
              color: isDarkMode ? "#ffffff" : "#666",
              marginRight: {
                xs: "8px",
                sm: "12px",
                md: "16px",
              },
              display: {
                xs: "block",
                md: "none",
              },
              padding: {
                xs: "8px",
                sm: "10px",
                md: "12px",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Breadcrumbs */}
          <Breadcrumbs
            separator="/"
            sx={{
              "& .MuiBreadcrumbs-separator": {
                color: isDarkMode ? "#b0b0b0" : "#999",
              },
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FolderIcon
                sx={{
                  color: isDarkMode ? "#b0b0b0" : "#666",
                  marginRight: "8px",
                  fontSize: "20px",
                }}
              />
              <StarIcon
                sx={{
                  color: isDarkMode ? "#b0b0b0" : "#666",
                  marginRight: "8px",
                  fontSize: "20px",
                }}
              />
            </Box>
            {getBreadcrumbs().map((crumb, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color:
                    index === getBreadcrumbs().length - 1
                      ? isDarkMode
                        ? "#ffffff"
                        : "#333"
                      : isDarkMode
                      ? "#b0b0b0"
                      : "#666",
                  fontWeight: index === getBreadcrumbs().length - 1 ? 600 : 400,
                  fontSize: "14px",
                }}
              >
                {crumb}
              </Typography>
            ))}
          </Breadcrumbs>
        </Box>

        {/* Center - Search bar */}
        <Box
          sx={{
            position: "relative",
            backgroundColor: isDarkMode ? "#404040" : "#f5f5f5",
            borderRadius: "8px",
            margin: {
              xs: "0 8px",
              sm: "0 16px",
              md: "0 24px",
            },
            width: {
              xs: "120px",
              sm: "200px",
              md: "300px",
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <Box
            sx={{
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <SearchIcon sx={{ color: isDarkMode ? "#b0b0b0" : "#999", marginRight: "8px", fontSize: "20px" }} />
            <InputBase
              placeholder="Search"
              sx={{
                flex: 1,
                fontSize: "14px",
                color: isDarkMode ? "#ffffff" : "#333",
                "& input": {
                  padding: 0,
                },
                "& input::placeholder": {
                  color: isDarkMode ? "#b0b0b0" : "#999",
                  opacity: 1,
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: isDarkMode ? "#b0b0b0" : "#999",
                fontSize: "12px",
                backgroundColor: isDarkMode ? "#666" : "#e0e0e0",
                padding: "2px 6px",
                borderRadius: "4px",
                marginLeft: "8px",
              }}
            >
              /
            </Typography>
          </Box>
        </Box>

        {/* Right side - Utility icons */}
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: {
            xs: "4px",
            sm: "6px",
            md: "8px",
          },
        }}>
          <IconButton
            sx={{
              color: isDarkMode ? "#b0b0b0" : "#666",
              padding: {
                xs: "6px",
                sm: "8px",
                md: "10px",
              },
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <FolderIcon />
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#b0b0b0" : "#666",
              padding: {
                xs: "6px",
                sm: "8px",
                md: "10px",
              },
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <StarIcon />
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#b0b0b0" : "#666",
              padding: {
                xs: "6px",
                sm: "8px",
                md: "10px",
              },
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#b0b0b0" : "#666",
              padding: {
                xs: "6px",
                sm: "8px",
                md: "10px",
              },
            }}
            onClick={toggleTheme}
          >
            {isDarkMode ? <SunIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#b0b0b0" : "#666",
              padding: {
                xs: "6px",
                sm: "8px",
                md: "10px",
              },
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <HistoryIcon />
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#b0b0b0" : "#666",
              padding: {
                xs: "6px",
                sm: "8px",
                md: "10px",
              },
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <SettingsIcon />
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#b0b0b0" : "#666",
              padding: {
                xs: "6px",
                sm: "8px",
                md: "10px",
              },
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
