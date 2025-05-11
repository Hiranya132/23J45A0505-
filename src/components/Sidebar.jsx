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
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid #eee' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img 
            src="https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=40" 
            alt="Salam Kisan" 
            style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} 
          />
          <Typography variant="h6" sx={{ color: '#333', fontSize: '1.1rem', fontWeight: 500 }}>
            SALAM KISAN
          </Typography>
        </Box>
      </Box>
      <List sx={{ pt: 2 }}>
        <ListItem 
          button 
          selected 
          onClick={() => onViewChange('dashboard')} 
          sx={{ 
            '&.Mui-selected': { 
              bgcolor: '#e3f2fd',
              '&:hover': { bgcolor: '#e3f2fd' }
            },
            mb: 1
          }}
        >
          <ListItemIcon><DashboardIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Dashboards" />
        </ListItem>
        <ListItem 
          button 
          onClick={() => onViewChange('batch-details')} 
          sx={{ 
            '&:hover': { bgcolor: '#f5f5f5' },
            mb: 1
          }}
        >
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Batch" />
        </ListItem>
        <ListItem button sx={{ '&:hover': { bgcolor: '#f5f5f5' }, mb: 1 }}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button sx={{ '&:hover': { bgcolor: '#f5f5f5' }, mb: 1 }}>
          <ListItemIcon><EventNoteIcon /></ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItem>
        <ListItem button sx={{ '&:hover': { bgcolor: '#f5f5f5' }, mb: 1 }}>
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
        <ListItem button sx={{ '&:hover': { bgcolor: '#f5f5f5' }, mb: 1 }}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
}