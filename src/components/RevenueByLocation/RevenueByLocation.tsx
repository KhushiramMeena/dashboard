import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useTheme } from "../../contexts/ThemeContext";

const RevenueByLocation: React.FC = () => {
  const { isDarkMode } = useTheme();

  const locations = [
    {
      name: "New York",
      revenue: "72K",
      coordinates: [-74.006, 40.7128] as [number, number],
    },
    {
      name: "San Francisco",
      revenue: "39K",
      coordinates: [-122.4194, 37.7749] as [number, number],
    },
    {
      name: "Sydney",
      revenue: "25K",
      coordinates: [151.2093, -33.8688] as [number, number],
    },
    {
      name: "Singapore",
      revenue: "61K",
      coordinates: [103.8198, 1.3521] as [number, number],
    },
  ];

  // Calculate max revenue for progress bars
  const maxRevenue = Math.max(...locations.map((loc) => parseInt(loc.revenue)));

  return (
    <Card
      sx={{
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        border: isDarkMode ? "1px solid #404040" : " ",
        backgroundColor: "#F7F9FB"
      }}
    >
      <CardContent sx={{ padding: "20px" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: isDarkMode ? "#ffffff" : "#333",
            marginBottom: "20px",
            fontSize: "16px",
          }}
        >
          Revenue by Location
        </Typography>

        {/* World Map */}
        <Box
          sx={{
            width: "100%",
            height: "120px",
            borderRadius: "6px",
            marginBottom: "16px",
            overflow: "hidden",
            backgroundColor: isDarkMode ? "#1a1a1a" : "#f8f9fa",
            border: isDarkMode ? "1px solid #404040" : "1px solid #e0e0e0",
            position: "relative",
          }}
        >
          <ComposableMap
            projection="geoEquirectangular"
            width={400}
            height={120}
            style={{ width: "100%", height: "100%" }}
            projectionConfig={{
              scale: 100,
              center: [0, 0],
            }}
          >
            <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isDarkMode ? "#404040" : "#e3f2fd"}
                    stroke={isDarkMode ? "#666666" : "#1976d2"}
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {locations.map((location, index) => (
              <Marker key={index} coordinates={location.coordinates}>
                <circle
                  r={3}
                  fill={isDarkMode ? "#9c27b0" : "#1976d2"}
                  stroke={isDarkMode ? "#ffffff" : "#ffffff"}
                  strokeWidth={1.5}
                  style={{
                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
                  }}
                />
              </Marker>
            ))}
          </ComposableMap>
        </Box>

        {/* Location List with Progress Bars */}
        <Box>
          {locations.map((location, index) => {
            const revenueValue = parseInt(location.revenue);
            const progressValue = (revenueValue / maxRevenue) * 100;

            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                  padding: "4px 0",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: isDarkMode ? "#ffffff" : "#333",
                    fontSize: "14px",
                    minWidth: "100px",
                    marginRight: "12px",
                  }}
                >
                  {location.name}
                </Typography>
                <Box sx={{ flexGrow: 1, marginRight: "12px" }}>
                  <LinearProgress
                    variant="determinate"
                    value={progressValue}
                    sx={{
                      height: "6px",
                      borderRadius: "3px",
                      backgroundColor: isDarkMode ? "#404040" : "#e0e0e0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: isDarkMode ? "#9c27b0" : "#1976d2",
                        borderRadius: "3px",
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDarkMode ? "#ffffff" : "#333",
                    fontWeight: 600,
                    fontSize: "14px",
                    minWidth: "40px",
                    textAlign: "right",
                  }}
                >
                  ${location.revenue}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default RevenueByLocation;
