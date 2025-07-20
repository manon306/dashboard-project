// App.jsx
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import { createTheme } from "@mui/material/styles";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Page from "./components/cards/page.tsx";
import SelectActionCard from "./components/cards/page.tsx";
import PieChartExample from "./components/charts/page.tsx";
import PieChart2 from "./components/charts/page2.tsx";
import CustomizedTables from "./components/table/page.tsx";
import CalendarPage from "./components/calender/page.tsx";
import TodoSamplePage from "./components/todosample/page.tsx";
import CollapsibleTable from "./components/table/page2.tsx";
import FeedbackWidget from "./components/feedback/page.tsx";
import { ThemeProvider} from '@mui/material/styles';
import FooterPage from "./components/footer/page.tsx";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const drawerWidth = 240;
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});

const NAVIGATION = [
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { segment: "reports", title: "Reports", icon: <BarChartIcon /> },
];

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
      }}
      variant="permanent"
      anchor="left"
    >
      <Typography variant="h6" sx={{ m: 2 }}>My Dashboard</Typography>
      <List>
        {NAVIGATION.map((item) => (
          <ListItem button key={item.segment} component="a" href={`/${item.segment}`}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

function PageContent({ title }) {
  return (
    <div>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2 }}>
        <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
      <Page title={title} />
      <div style={{ display: 'flex', justifyContent:"space-around", gap: '16px', marginTop: '16px' }}>
        <PieChartExample />
        <PieChart2 />
      </div>
      <CustomizedTables />
      <div style={{ display: 'flex', justifyContent:"space-around", gap: '16px', marginTop: '16px' }}>
        <CalendarPage />
        <TodoSamplePage />
      </div>
      <CollapsibleTable />
      <FeedbackWidget />
      <footer>
      <FooterPage />
      </footer>
    
    </div>
    
  );
}

function AppLayout() {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "") || "dashboard";
  const currentPage = NAVIGATION.find((n) => n.segment === currentPath);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <PageContent title={currentPage?.title || "Not Found"} />
      </Box>
    </Box>
  );
}

function App() {
  return (
    
    <div className="App">
      <Routes >
        <Route path="/*" element={<AppLayout />} />

      </Routes>
    </div>
  );
}

export default App;
