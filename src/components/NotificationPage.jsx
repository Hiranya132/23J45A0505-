import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const notifications = [
  {
    message: 'A new trainee has registered for the training program.',
    type: 'info',
  },
  {
    message: 'Trainee [Name] has not completed the registration process.',
    type: 'warning',
  },
  {
    message: 'No trainer assigned for upcoming session on 29 Apr 2025. Please assign one.',
    type: 'success',
  },
  {
    message: 'Trainee Aditya scored below threshold in recent assessment.',
    type: 'error',
  },
  {
    message: 'Trainee Sai is eligible for the final exam. Schedule the test before 23 March 2025.',
    type: 'warning',
  },
  {
    message: 'Trainee Suraj has not started the assigned training module.',
    type: 'info',
  },
  {
    message: 'Trainee Amol has successfully completed the training and is certified.',
    type: 'success',
  },
];

const getBackgroundColor = (type) => {
  switch (type) {
    case 'info': return '#f8f9fa';
    case 'warning': return '#fff3cd';
    case 'success': return '#d1e7dd';
    case 'error': return '#f8d7da';
    default: return '#f8f9fa';
  }
};

export default function NotificationPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
        Notifications
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {notifications.map((notification, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              borderRadius: 1,
              bgcolor: getBackgroundColor(notification.type),
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography>{notification.message}</Typography>
            <IconButton size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}