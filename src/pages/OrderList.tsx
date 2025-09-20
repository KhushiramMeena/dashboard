import React, { useState } from "react";
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
  TablePagination,
  IconButton,
  InputBase,
  Checkbox,
  Avatar,
  Chip,
  Paper,
} from "@mui/material";
import FadeIn from "../components/FadeIn";
import { useTheme } from "../contexts/ThemeContext";
import {
  Add as AddIcon,
  FilterList as FilterIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Search as SearchIcon,
  CalendarToday as CalendarIcon,
  Description as DescriptionIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";

interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

const OrderList: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState<string>("All");
  const [sortField, setSortField] = useState<keyof Order | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const orders: Order[] = [
    {
      id: "#CM9801",
      user: { name: "Natali Craig", avatar: "/api/placeholder/40/40" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "#CM9802",
      user: { name: "Kate Morrison", avatar: "/api/placeholder/40/40" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "#CM9803",
      user: { name: "Drew Cano", avatar: "/api/placeholder/40/40" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "#CM9804",
      user: { name: "Orlando Diggs", avatar: "/api/placeholder/40/40" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "/api/placeholder/40/40" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
    // Duplicate entries to show pagination
    {
      id: "#CM9806",
      user: { name: "Natali Craig", avatar: "/api/placeholder/40/40" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "#CM9807",
      user: { name: "Kate Morrison", avatar: "/api/placeholder/40/40" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "#CM9808",
      user: { name: "Drew Cano", avatar: "/api/placeholder/40/40" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "#CM9809",
      user: { name: "Orlando Diggs", avatar: "/api/placeholder/40/40" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9810",
      user: { name: "Andi Lane", avatar: "/api/placeholder/40/40" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
  ];

  // Filter and search logic
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDate =
      dateFilter === "All" || getDateFilterMatch(order.date, dateFilter);

    return matchesSearch && matchesDate;
  });

  // Helper function to determine date filter match
  const getDateFilterMatch = (orderDate: string, filter: string): boolean => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);
    const lastMonth = new Date(today);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    switch (filter) {
      case "Today":
        return (
          orderDate === "Just now" ||
          orderDate === "A minute ago" ||
          orderDate.includes("hour ago")
        );
      case "Yesterday":
        return orderDate === "Yesterday";
      case "This Week":
        return (
          orderDate === "Just now" ||
          orderDate === "A minute ago" ||
          orderDate.includes("hour ago") ||
          orderDate === "Yesterday" ||
          orderDate.includes("days ago")
        );
      case "This Month":
        return (
          orderDate === "Just now" ||
          orderDate === "A minute ago" ||
          orderDate.includes("hour ago") ||
          orderDate === "Yesterday" ||
          orderDate.includes("days ago") ||
          orderDate.includes("Feb")
        );
      case "Older":
        return (
          orderDate.includes("2023") ||
          orderDate.includes("2022") ||
          orderDate.includes("2021") ||
          orderDate.includes("2020")
        );
      default:
        return true;
    }
  };

  // Sorting logic
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (!sortField) return 0;

    let aValue: any = a[sortField];
    let bValue: any = b[sortField];

    // Handle nested user object
    if (sortField === "user") {
      aValue = a.user.name;
      bValue = b.user.name;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
  });

  // Pagination logic
  const paginatedOrders = sortedOrders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleSort = (field: keyof Order) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "#1976d2";
      case "Complete":
        return "#4caf50";
      case "Pending":
        return "#2196f3";
      case "Approved":
        return "#ff9800";
      case "Rejected":
        return "#f44336";
      default:
        return "#666";
    }
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = orders.map((order) => order.id);
      setSelectedOrders(newSelected);
      return;
    }
    setSelectedOrders([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selectedOrders.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedOrders, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedOrders.slice(1));
    } else if (selectedIndex === selectedOrders.length - 1) {
      newSelected = newSelected.concat(selectedOrders.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedOrders.slice(0, selectedIndex),
        selectedOrders.slice(selectedIndex + 1)
      );
    }

    setSelectedOrders(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Reset page when search or filter changes
  React.useEffect(() => {
    setPage(0);
  }, [searchTerm, dateFilter]);

  const isSelected = (id: string) => selectedOrders.indexOf(id) !== -1;

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0 auto",
        transition: "background-color 0.3s ease",
        padding: {
          xs: "0",
          sm: "0",
          md: "0",
        },
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
          Order List
        </Typography>
      </FadeIn>

      {/* Main Card */}
      <FadeIn delay={0.2}>
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
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          <CardContent
            sx={{
              padding: {
                xs: "16px",
                sm: "20px",
                md: "24px",
              },
            }}
          >
            {/* Toolbar */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {/* Left side - Add button and filters */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <IconButton
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "white",
                    borderRadius: "8px",
                    padding: "8px",
                    "&:hover": {
                      backgroundColor: "#1565c0",
                    },
                  }}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: isDarkMode ? "#b0b0b0" : "#666",
                    borderRadius: "8px",
                    padding: "8px",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                >
                  <FilterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: isDarkMode ? "#b0b0b0" : "#666",
                    borderRadius: "8px",
                    padding: "8px",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  <ArrowUpwardIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: isDarkMode ? "#b0b0b0" : "#666",
                    borderRadius: "8px",
                    padding: "8px",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  <ArrowDownwardIcon />
                </IconButton>
              </Box>

              {/* Right side - Search */}
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  minWidth: "200px",
                }}
              >
                <Box
                  sx={{
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SearchIcon
                    sx={{
                      color: isDarkMode ? "#b0b0b0" : "#999",
                      marginRight: "8px",
                      fontSize: "20px",
                    }}
                  />
                  <InputBase
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                      flex: 1,
                      fontSize: "14px",
                      "& input": {
                        padding: 0,
                      },
                      "& input::placeholder": {
                        color: "#999",
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Filter Dropdown */}
            {showFilterDropdown && (
              <Box
                sx={{
                  backgroundColor: isDarkMode ? "#404040" : "#f5f5f5",
                  borderRadius: "8px",
                  padding: "12px",
                  marginBottom: "16px",
                  border: isDarkMode ? "1px solid #666" : "1px solid #e0e0e0",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: isDarkMode ? "#ffffff" : "#333",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  Filter by Date
                </Typography>
                <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {[
                    "All",
                    "Today",
                    "Yesterday",
                    "This Week",
                    "This Month",
                    "Older",
                  ].map((dateOption) => (
                    <Chip
                      key={dateOption}
                      label={dateOption}
                      onClick={() => {
                        setDateFilter(dateOption);
                        setShowFilterDropdown(false);
                      }}
                      sx={{
                        backgroundColor:
                          dateFilter === dateOption
                            ? "#1976d2"
                            : isDarkMode
                            ? "#333"
                            : "#e0e0e0",
                        color:
                          dateFilter === dateOption
                            ? "#ffffff"
                            : isDarkMode
                            ? "#ffffff"
                            : "#333",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor:
                            dateFilter === dateOption
                              ? "#1565c0"
                              : isDarkMode
                              ? "#444"
                              : "#d0d0d0",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Table */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        indeterminate={
                          selectedOrders.length > 0 &&
                          selectedOrders.length < orders.length
                        }
                        checked={
                          orders.length > 0 &&
                          selectedOrders.length === orders.length
                        }
                        onChange={handleSelectAllClick}
                        sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: isDarkMode ? "#ffffff" : "#333",
                      }}
                    >
                      Order ID
                    </TableCell>
                    <TableCell
                      onClick={() => handleSort("user")}
                      sx={{
                        fontWeight: 600,
                        color: isDarkMode ? "#ffffff" : "#333",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        User
                        {sortField === "user" &&
                          (sortDirection === "asc" ? (
                            <ArrowUpwardIcon fontSize="small" />
                          ) : (
                            <ArrowDownwardIcon fontSize="small" />
                          ))}
                      </Box>
                    </TableCell>
                    <TableCell
                      onClick={() => handleSort("project")}
                      sx={{
                        fontWeight: 600,
                        color: isDarkMode ? "#ffffff" : "#333",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        Project
                        {sortField === "project" &&
                          (sortDirection === "asc" ? (
                            <ArrowUpwardIcon fontSize="small" />
                          ) : (
                            <ArrowDownwardIcon fontSize="small" />
                          ))}
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: isDarkMode ? "#ffffff" : "#333",
                      }}
                    >
                      Address
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: isDarkMode ? "#ffffff" : "#333",
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      onClick={() => handleSort("status")}
                      sx={{
                        fontWeight: 600,
                        color: isDarkMode ? "#ffffff" : "#333",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        Status
                        {sortField === "status" &&
                          (sortDirection === "asc" ? (
                            <ArrowUpwardIcon fontSize="small" />
                          ) : (
                            <ArrowDownwardIcon fontSize="small" />
                          ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedOrders.map((order) => {
                    const isItemSelected = isSelected(order.id);
                    return (
                      <TableRow
                        key={order.id}
                        hover
                        onClick={(event) => handleClick(event, order.id)}
                        selected={isItemSelected}
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#f5f5f5",
                          },
                        }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            color: isDarkMode ? "#ffffff" : "#333",
                            fontWeight: 600,
                          }}
                        >
                          {order.id}
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <Avatar
                              sx={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#e0e0e0",
                                fontSize: "14px",
                                fontWeight: 600,
                                color: isDarkMode ? "#b0b0b0" : "#666",
                              }}
                            >
                              {order.user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </Avatar>
                            <Typography
                              variant="body2"
                              sx={{
                                color: isDarkMode ? "#b0b0b0" : "#333",
                                fontSize: "14px",
                              }}
                            >
                              {order.user.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: isDarkMode ? "#b0b0b0" : "#666",
                            fontSize: "14px",
                          }}
                        >
                          {order.project}
                        </TableCell>
                        <TableCell>
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
                                color: isDarkMode ? "#b0b0b0" : "#666",
                                fontSize: "14px",
                              }}
                            >
                              {order.address}
                            </Typography>
                            {order.id === "#CM9805" && (
                              <DescriptionIcon
                                sx={{
                                  color: isDarkMode ? "#b0b0b0" : "#999",
                                  fontSize: "16px",
                                }}
                              />
                            )}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <CalendarIcon
                              sx={{ color: "#999", fontSize: "16px" }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: isDarkMode ? "#b0b0b0" : "#666",
                                fontSize: "14px",
                              }}
                            >
                              {order.date}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <Chip
                              label={order.status}
                              size="small"
                              sx={{
                                backgroundColor:
                                  getStatusColor(order.status) + "20",
                                color:
                                  getStatusColor(order.status) + " !important",
                                fontWeight: 500,
                                fontSize: "12px",
                                height: "24px",
                                border: `1px solid ${getStatusColor(
                                  order.status
                                )}30`,
                                "& .MuiChip-label": {
                                  padding: "0 8px",
                                  color:
                                    getStatusColor(order.status) +
                                    " !important",
                                },
                              }}
                            />
                            {order.status === "Rejected" && (
                              <MoreVertIcon
                                sx={{
                                  color: isDarkMode ? "#b0b0b0" : "#999",
                                  fontSize: "16px",
                                }}
                              />
                            )}
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={sortedOrders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{
                borderTop: "1px solid #e0e0e0",
                marginTop: "16px",
                "& .MuiTablePagination-toolbar": {
                  paddingLeft: 0,
                },
                "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                  {
                    fontSize: "14px",
                    color: isDarkMode ? "#b0b0b0" : "#666",
                  },
              }}
            />
          </CardContent>
        </Card>
      </FadeIn>
    </Box>
  );
};

export default OrderList;
