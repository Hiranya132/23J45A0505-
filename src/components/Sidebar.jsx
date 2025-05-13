import { List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function Sidebar({ onViewChange, selectedView }) {
  return (
    <Box sx={{ width: 240, bgcolor: '#006837', height: '100vh' }}>
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        <Box 
          component="img"
          src="https://i.ibb.co/Jk8FPp8/logo.png"
          alt="Salam Kisan Logo"
          sx={{ 
            width: 36,
            height: 36,
            borderRadius: '50%',
            bgcolor: '#fff',
            p: 0.5
          }}
        />
        <Typography variant="h6" sx={{ color: '#fff', fontSize: '1.1rem' }}>
          SALAM KISAN
        </Typography>
      </Box>
      <List sx={{ pt: 2 }}>
        {[
          { text: 'Dashboards', icon: <DashboardIcon />, view: 'dashboard' },
          { text: 'Batch', icon: <GroupIcon />, view: 'batch-details' },
          { text: 'Profile', icon: <PersonIcon />, view: 'profile' },
          { text: 'Attendance', icon: <EventNoteIcon />, view: 'attendance' },
          { text: 'Notification', icon: <NotificationsIcon />, view: 'notification' },
          { text: 'Logout', icon: <LogoutIcon />, view: 'logout' }
        ].map((item) => (
          <ListItem
            key={item.text}
            button
            selected={selectedView === item.view}
            onClick={() => onViewChange(item.view)}
            sx={{
              mb: 1,
              color: '#fff',
              '&.Mui-selected': {
                bgcolor: 'rgba(255,255,255,0.1)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' }
              },
              '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
            }}
          >
            <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}