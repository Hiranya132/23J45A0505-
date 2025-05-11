import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function BatchCard({ batchId, duration, status, completion, pilotsCount }) {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed': return '#4caf50';
      case 'Ongoing': return '#f44336';
      case 'Upcoming': return '#ff9800';
      default: return '#2196f3';
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case 'Completed': return '#e8f5e9';
      case 'Ongoing': return '#ffebee';
      case 'Upcoming': return '#fff3e0';
      default: return '#e3f2fd';
    }
  };

  return (
    <Box sx={{ 
      p: 2.5,
      bgcolor: '#fff', 
      borderRadius: 1,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      '&:hover': {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }
    }}>
      <Box sx={{ mb: 1.5 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
          Batch ID
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {batchId}
        </Typography>
      </Box>

      <Box sx={{ mb: 1.5 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
          Duration
        </Typography>
        <Typography variant="body2">
          {duration}
        </Typography>
      </Box>

      {pilotsCount && (
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
            Pilot Stats
          </Typography>
          <Typography variant="body2">
            Pass: {pilotsCount.passed || 0}
          </Typography>
          <Typography variant="body2">
            Fail: {pilotsCount.failed || 0}
          </Typography>
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Button 
          variant="text"
          size="small"
          sx={{ 
            textTransform: 'none',
            color: '#1976d2',
            '&:hover': {
              bgcolor: 'transparent',
              textDecoration: 'underline'
            }
          }}
        >
          View Details
        </Button>
        <Typography 
          variant="caption" 
          sx={{ 
            color: getStatusColor(),
            bgcolor: getStatusBg(),
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem'
          }}
        >
          {status}
        </Typography>
      </Box>
    </Box>
  );
}