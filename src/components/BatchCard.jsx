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

  const getStatusIcon = () => {
    switch (status) {
      case 'Completed': return <CheckCircleIcon sx={{ fontSize: 16 }} />;
      case 'Ongoing': return <PendingIcon sx={{ fontSize: 16 }} />;
      case 'Upcoming': return <ScheduleIcon sx={{ fontSize: 16 }} />;
      default: return null;
    }
  };

  return (
    <Box sx={{ 
      p: 3, 
      bgcolor: '#fff', 
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transform: 'translateY(-2px)',
        transition: 'all 0.2s ease-in-out'
      }
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">Batch ID</Typography>
          <Typography variant="h6" fontWeight="bold">{batchId}</Typography>
        </Box>
        <Typography 
          variant="button" 
          sx={{ 
            color: getStatusColor(),
            bgcolor: getStatusBg(),
            px: 2,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          {getStatusIcon()}
          {status}
        </Typography>
      </Box>
      
      <Typography variant="subtitle2" color="text.secondary">Duration</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>{duration}</Typography>
      
      {completion && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Completion Rate
          </Typography>
          <Box sx={{ 
            height: 4, 
            bgcolor: '#e0e0e0', 
            borderRadius: 2, 
            overflow: 'hidden',
            mb: 1
          }}>
            <Box sx={{ 
              width: `${completion}%`, 
              height: '100%', 
              bgcolor: 'primary.main',
              borderRadius: 2
            }} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {completion}%
          </Typography>
        </Box>
      )}

      {pilotsCount && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Pilots
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body2">
              Total: {pilotsCount.total}
            </Typography>
            {pilotsCount.passed && (
              <Typography variant="body2" color="success.main">
                Passed: {pilotsCount.passed}
              </Typography>
            )}
            {pilotsCount.failed && (
              <Typography variant="body2" color="error.main">
                Failed: {pilotsCount.failed}
              </Typography>
            )}
            {pilotsCount.inProgress && (
              <Typography variant="body2" color="info.main">
                In Progress: {pilotsCount.inProgress}
              </Typography>
            )}
          </Box>
        </Box>
      )}
      
      <Button 
        variant="outlined" 
        size="small" 
        fullWidth
        sx={{ 
          textTransform: 'none',
          '&:hover': {
            bgcolor: '#e3f2fd'
          }
        }}
      >
        View Details
      </Button>
    </Box>
  );
}