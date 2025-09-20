import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Badge,
  IconButton,
} from "@mui/material";
import {
  BugReport as BugReportIcon,
  PersonAdd as PersonAddIcon,
  MoreHoriz as MoreHorizIcon,
  CheckCircle as CheckCircleIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const RightSidebar: React.FC = () => {
  const { isDarkMode } = useTheme();

  const notifications = [
    {
      id: 1,
      icon: <BugReportIcon sx={{ color: "#f44336" }} />,
      text: "You have a bug that needs...",
      time: "Just now",
    },
    {
      id: 2,
      icon: <PersonAddIcon sx={{ color: "#4caf50" }} />,
      text: "New user registered",
      time: "59 minutes ago",
    },
    {
      id: 3,
      icon: <BugReportIcon sx={{ color: "#f44336" }} />,
      text: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      id: 4,
      icon: <PersonAddIcon sx={{ color: "#2196f3" }} />,
      text: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      id: 1,
      icon: <BugReportIcon sx={{ color: "#f44336" }} />,
      text: "You have a bug that needs...",
      time: "Just now",
    },
    {
      id: 2,
      icon: <CheckCircleIcon sx={{ color: "#4caf50" }} />,
      text: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      icon: <BugReportIcon sx={{ color: "#f44336" }} />,
      text: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      icon: <EditIcon sx={{ color: "#ff9800" }} />,
      text: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      icon: <DeleteIcon sx={{ color: "#f44336" }} />,
      text: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    { id: 1, name: "Natali Craig", avatar: "NC", online: true },
    { id: 2, name: "Drew Cano", avatar: "DC", online: true },
    { id: 3, name: "Orlando Diggs", avatar: "OD", online: true },
    { id: 4, name: "Andi Lane", avatar: "AL", online: true },
    { id: 5, name: "Kate Morrison", avatar: "KM", online: true },
    { id: 6, name: "Koray Okumus", avatar: "KO", online: true },
    { id: 7, name: "Sarah Johnson", avatar: "SJ", online: false },
    { id: 8, name: "Mike Chen", avatar: "MC", online: true },
    { id: 9, name: "Emma Wilson", avatar: "EW", online: false },
    { id: 10, name: "Alex Rodriguez", avatar: "AR", online: true },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "280px",
            md: "300px",
          },
          backgroundColor: isDarkMode ? "#2d2d2d" : "#ffffff",
          borderLeft: isDarkMode ? "1px solid #404040" : "1px solid #e0e0e0",
          padding: {
            xs: "16px",
            sm: "20px",
            md: "24px",
          },
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          display: { xs: "none", lg: "block" }, // Hide on small screens
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          position: "sticky",
          top: 0,
          color: isDarkMode ? "#ffffff" : "#333",
          transition:
            "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: isDarkMode ? "#404040" : "#f1f1f1",
            borderRadius: "3px",
            transition: "background-color 0.3s ease",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: isDarkMode ? "#666" : "#c1c1c1",
            borderRadius: "3px",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: isDarkMode ? "#888" : "#a8a8a8",
            },
          },
        }}
      >
        {/* Notifications */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            marginBottom: "16px",
            fontSize: "18px",
            color: isDarkMode ? "#ffffff" : "#333",
          }}
        >
          Notifications
        </Typography>
        <List disablePadding>
          {notifications.map((notification) => (
            <ListItem
              key={notification.id}
              sx={{
                padding: "8px 0",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#333333" : "#f0f0f0",
                  borderRadius: "4px",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {notification.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{ color: isDarkMode ? "#ffffff" : "#333" }}
                  >
                    {notification.text}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                  >
                    {notification.time}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Divider
          sx={{
            margin: "24px 0",
            borderColor: isDarkMode ? "#404040" : "#e0e0e0",
          }}
        />

        {/* Activities */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            marginBottom: "16px",
            fontSize: "18px",
            color: isDarkMode ? "#ffffff" : "#333",
          }}
        >
          Activities
        </Typography>
        <List disablePadding>
          {activities.map((activity) => (
            <ListItem
              key={activity.id}
              sx={{
                padding: "8px 0",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#333333" : "#f0f0f0",
                  borderRadius: "4px",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {activity.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{ color: isDarkMode ? "#ffffff" : "#333" }}
                  >
                    {activity.text}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                  >
                    {activity.time}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Divider
          sx={{
            margin: "24px 0",
            borderColor: isDarkMode ? "#404040" : "#e0e0e0",
          }}
        />

        {/* Contacts */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            marginBottom: "16px",
            fontSize: "18px",
            color: isDarkMode ? "#ffffff" : "#333",
          }}
        >
          Contacts
        </Typography>
        <List disablePadding>
          {contacts.map((contact) => (
            <ListItem
              key={contact.id}
              sx={{
                padding: "8px 0",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#333333" : "#f0f0f0",
                  borderRadius: "4px",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                  sx={{
                    "& .MuiBadge-dot": {
                      backgroundColor: contact.online ? "#4caf50" : "#9e9e9e",
                      color: contact.online ? "#4caf50" : "#9e9e9e",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      border: `2px solid ${isDarkMode ? "#2d2d2d" : "#ffffff"}`,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: isDarkMode ? "#9c27b0" : "#1976d2",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {contact.avatar}
                  </Avatar>
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDarkMode ? "#ffffff" : "#333",
                      fontWeight: 500,
                    }}
                  >
                    {contact.name}
                  </Typography>
                }
              />
              <IconButton
                size="small"
                sx={{
                  color: isDarkMode ? "#b0b0b0" : "#666",
                  padding: "4px",
                }}
              >
                <MoreHorizIcon fontSize="small" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </motion.div>
  );
};

export default RightSidebar;
