import { List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function Sidebar({ onViewChange }) {
  return (
    <Box sx={{ width: 240, bgcolor: '#fff', height: '100vh', borderRight: '1px solid #eee' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: '#333' }}>SALAM KISAN</Typography>
      </Box>
      <List>
        <ListItem button selected onClick={() => onViewChange('dashboard')}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboards" />
        </ListItem>
        <ListItem button onClick={() => onViewChange('batch-details')}>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Batch" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><EventNoteIcon /></ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
}