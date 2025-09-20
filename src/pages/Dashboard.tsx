import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from "@mui/icons-material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import AnimatedCard from "../components/AnimatedCard";
import FadeIn from "../components/FadeIn";
import RevenueByLocation from "../components/RevenueByLocation/RevenueByLocation";
import { useTheme } from "../contexts/ThemeContext";

// Sample data for charts
const projectionsData = [
  { month: "Jan", projections: 20, actuals: 18 },
  { month: "Feb", projections: 25, actuals: 22 },
  { month: "Mar", projections: 30, actuals: 28 },
  { month: "Apr", projections: 28, actuals: 30 },
  { month: "May", projections: 35, actuals: 32 },
  { month: "Jun", projections: 40, actuals: 38 },
];

const revenueData = [
  { month: "Jan", currentWeek: 15, previousWeek: 18 },
  { month: "Feb", currentWeek: 18, previousWeek: 20 },
  { month: "Mar", currentWeek: 22, previousWeek: 25 },
  { month: "Apr", currentWeek: 25, previousWeek: 22 },
  { month: "May", currentWeek: 28, previousWeek: 30 },
  { month: "Jun", currentWeek: 30, previousWeek: 28 },
];

const salesData = [
  { name: "Direct", value: 300.56, color: "#B19CD9" }, // Light lavender/purple
  { name: "Affiliate", value: 135.18, color: "#A8E6CF" }, // Light pastel green
  { name: "Sponsored", value: 154.02, color: "#B8D4F0" }, // Light periwinkle blue
  { name: "E-mail", value: 48.96, color: "#B3E5FC" }, // Light cyan/sky blue
];

// Calculate total for percentage calculations
const totalSales = salesData.reduce((sum, item) => sum + item.value, 0);

const topProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

const Dashboard: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [hoveredSegment, setHoveredSegment] = React.useState<string | null>(
    null
  );

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0 auto",
        height: {
          xs: "calc(100vh - 96px)",
          sm: "calc(100vh - 108px)",
          md: "calc(100vh - 120px)",
        },
        overflowY: "auto",
        overflowX: "hidden",
        paddingRight: {
          xs: "4px",
          sm: "6px",
          md: "8px",
        },
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Page Title */}
      <FadeIn delay={0.1}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: isDarkMode ? "#ffffff" : "#333",
            marginBottom: {
              xs: "20px",
              sm: "24px",
              md: "32px",
            },
            fontSize: {
              xs: "20px",
              sm: "24px",
              md: "28px",
            },
          }}
        >
          eCommerce
        </Typography>
      </FadeIn>

      {/* Main eCommerce Dashboard Card */}
      <AnimatedCard delay={0.2}>
        <Card
          sx={{
            borderRadius: {
              xs: "8px",
              sm: "10px",
              md: "12px",
            },
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: isDarkMode ? "1px solid #404040" : "1px solid #e0e0e0",
            backgroundColor: isDarkMode ? "#2d2d2d" : "#ffffff",
            padding: {
              xs: "16px",
              sm: "20px",
              md: "24px",
            },
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          {/* Row 1: KPI Cards + Projections Chart */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr",
              },
              gap: {
                xs: 2,
                sm: 2,
                md: 3,
              },
              marginBottom: {
                xs: "20px",
                sm: "24px",
                md: "32px",
              },
            }}
          >
            {/* Left Side: 2x2 Grid of KPI Cards */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },
                gap: {
                  xs: 2,
                  sm: 2,
                  md: 3,
                },
              }}
            >
              {/* Customers Card */}
              <Card
                className="customers-card"
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  // border: "1px solid #E3F5FF",
                }}
              >
                <CardContent sx={{ padding: "20px" }}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        font: "Inter",
                        fontSize: "14px",
                        marginBottom: "8px",
                        fontWeight: 500,
                      }}
                    >
                      Customers
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          // color: isDarkMode ? "#ffffff" : "#333",
                          fontSize: "24px",
                        }}
                      >
                        3,781
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4caf50",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        +11.01%
                      </Typography>
                      <TrendingUpIcon
                        sx={{
                          color: "#4caf50",
                          fontSize: "16px",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Orders Card */}
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  backgroundColor: isDarkMode ? "#333333" : "#ffffff",
                }}
              >
                <CardContent sx={{ padding: "20px" }}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          font: "Inter",
                          color: isDarkMode ? "#ffffff" : "#333",
                          fontSize: "14px",
                          marginBottom: "8px",
                          fontWeight: 500,
                        }}
                      >
                        Orders
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: isDarkMode ? "#b0b0b0" : "#666",
                            fontSize: "28px",
                            marginBottom: "8px",
                          }}
                        >
                          1,219
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#f44336",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          -0.03%
                        </Typography>
                        <TrendingDownIcon
                          sx={{
                            color: "#f44336",
                            fontSize: "16px",
                            marginRight: "4px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Revenue Card */}
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",

                  backgroundColor: isDarkMode ? "#333333" : "#ffffff",
                }}
              >
                <CardContent sx={{ padding: "20px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          font: "Inter",
                          color: isDarkMode ? "#ffffff" : "#333",
                          fontSize: "14px",
                          marginBottom: "8px",
                          fontWeight: 500,
                        }}
                      >
                        Revenue
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: isDarkMode ? "#b0b0b0" : "#666",
                            fontSize: "28px",
                            marginBottom: "8px",
                          }}
                        >
                          $695
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "#4caf50",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          +15.03%
                        </Typography>
                        <TrendingUpIcon
                          sx={{
                            color: "#4caf50",
                            fontSize: "16px",
                            marginRight: "4px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Growth Card */}
              <Card
                className="growth-card"
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent sx={{ padding: "20px" }}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDarkMode ? "#b0b0b0" : "#666",
                        fontSize: "14px",
                        marginBottom: "8px",
                        fontWeight: 500,
                      }}
                    >
                      Growth
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: isDarkMode ? "#ffffff" : "#333",
                          fontSize: "28px",
                        }}
                      >
                        30.1%
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4caf50",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        +6.08%
                      </Typography>
                      <TrendingUpIcon
                        sx={{
                          color: "#4caf50",
                          fontSize: "16px",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Right Side: Projections vs Actuals Card */}
            <Card
              sx={{
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                border: isDarkMode ? "1px solid #404040" : " ",
                backgroundColor: "#F7F9FB",
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
                  Projections vs Actuals
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={projectionsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip />
                    <Bar
                      dataKey="projections"
                      fill="#e3f2fd"
                      radius={[2, 2, 0, 0]}
                    />
                    <Bar
                      dataKey="actuals"
                      fill="#1976d2"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Box>

          {/* Row 2: Revenue Chart + Revenue by Location */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "2fr 1fr",
              },
              gap: 3,
              marginBottom: "32px",
            }}
          >
            {/* Revenue Trends Card */}
            <Card
              sx={{
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                border: isDarkMode ? "1px solid #404040" : " ",
                backgroundColor: "#F7F9FB",
              }}
            >
              <CardContent sx={{ padding: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,

                      marginBottom: "20px",
                      fontSize: "14px",
                    }}
                  >
                    Revenue
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    Current Week $58,211
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "12px" }}>
                    Previous Week $68,768
                  </Typography>
                </Box>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="currentWeek"
                      stroke="#333"
                      strokeWidth={2}
                      dot={{ fill: "#333", strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="previousWeek"
                      stroke="#999"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: "#999", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>

                {/* <Typography
                    variant="body2"
                    sx={{ color: "#333", fontSize: "14px" }}
                  >
                    Current Week $58,211
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#999", fontSize: "14px" }}
                  >
                    Previous Week $68,768
                  </Typography> */}
                {/* </Box> */}
              </CardContent>
            </Card>

            {/* Revenue by Location Card */}
            <RevenueByLocation />
          </Box>

          {/* Row 3: Bottom Section */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "2fr 1fr",
              },
              gap: 3,
            }}
          >
            {/* Top Selling Products Card */}
            <Card
              sx={{
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                border: isDarkMode ? "1px solid #404040" : " ",
                backgroundColor: "#F7F9FB",
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
                  Top Selling Products
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            color: isDarkMode ? "#ffffff" : "#333",
                          }}
                        >
                          Name
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            color: isDarkMode ? "#ffffff" : "#333",
                          }}
                        >
                          Price
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            color: isDarkMode ? "#ffffff" : "#333",
                          }}
                        >
                          Quantity
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            color: isDarkMode ? "#ffffff" : "#333",
                          }}
                        >
                          Amount
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {topProducts.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{ color: isDarkMode ? "#ffffff" : "#333" }}
                          >
                            {product.name}
                          </TableCell>
                          <TableCell
                            sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                          >
                            ${product.price}
                          </TableCell>
                          <TableCell
                            sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                          >
                            {product.quantity}
                          </TableCell>
                          <TableCell sx={{ color: "#333", fontWeight: 600 }}>
                            ${product.amount.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>

            {/* Total Sales Card */}
            <Card
              sx={{
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                backgroundColor: "#F7F9FB",
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
                  Total Sales
                </Typography>

                {/* Donut Chart Container */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={salesData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={0}
                        dataKey="value"
                        stroke="#ffffff"
                        strokeWidth={2}
                        onMouseEnter={(data) => setHoveredSegment(data.name)}
                        onMouseLeave={() => setHoveredSegment(null)}
                      >
                        {salesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Center Percentage Label - Only show on hover */}
                  {hoveredSegment && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: isDarkMode ? "#404040" : "#f5f5f5",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        minWidth: "60px",
                        textAlign: "center",
                        border: isDarkMode
                          ? "1px solid #666"
                          : "1px solid #e0e0e0",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: isDarkMode ? "#ffffff" : "#333",
                          fontSize: "14px",
                        }}
                      >
                        {(
                          ((salesData.find(
                            (item) => item.name === hoveredSegment
                          )?.value || 0) /
                            totalSales) *
                          100
                        ).toFixed(1)}
                        %
                      </Typography>
                    </Box>
                  )}
                </Box>

                {/* Legend */}
                <Box sx={{ marginTop: "16px" }}>
                  {salesData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                        padding: "4px 0",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: item.color,
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: isDarkMode ? "#ffffff" : "#333",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDarkMode ? "#ffffff" : "#333",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        ${item.value.toFixed(2)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Card>
      </AnimatedCard>
    </Box>
  );
};

export default Dashboard;
