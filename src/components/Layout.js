import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Routes, Route } from 'react-router-dom';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import TaskIcon from '@mui/icons-material/Task';
import ReportIcon from '@mui/icons-material/Assessment';

// Import the components that will be rendered in different routes
import ClientsPage from '../pages/ClientsPage';
import TasksPage from '../pages/TasksPage';
import ReportsPage from '../pages/ReportsPage';
import MyDailyCalendar from './MyDailyCalendar'; // Assuming you are using this for your calendar

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  zIndex: theme.zIndex.drawer + 1,  // Ensures AppBar stays above the drawer
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar (Top Navigation Bar) */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Luna Health
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar Navigation) */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Navigation Links */}
          <ListItemButton component={Link} to="/schedule">
            <ListItemIcon><ScheduleIcon /></ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItemButton>
          <ListItemButton component={Link} to="/clients">
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItemButton>
          <ListItemButton component={Link} to="/tasks">
            <ListItemIcon><TaskIcon /></ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItemButton>
          <ListItemButton component={Link} to="/reports">
            <ListItemIcon><ReportIcon /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main content where routed components will be displayed */}
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/schedule" element={<MyDailyCalendar />} /> {/* Calendar Page */}
          <Route path="/clients" element={<ClientsPage />} />       {/* Clients Page */}
          <Route path="/tasks" element={<TasksPage />} />           {/* Tasks Page */}
          <Route path="/reports" element={<ReportsPage />} />       {/* Reports Page */}
          <Route path="/" element={<div>Welcome to Luna Health</div>} /> {/* Default page */}
        </Routes>
      </Main>
    </Box>
  );
}