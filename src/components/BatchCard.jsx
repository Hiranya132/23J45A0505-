import { Box, Typography, Button, LinearProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function BatchCard({ batchId, duration, status, completion, pilotsCount }) {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed': return '#4caf50';
      case 'Ongoing': return '#dc3545';
      case 'Upcoming': return '#ffc107';
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
      p: 2,
      bgcolor: '#fff', 
      borderRadius: 1,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">
          Batch ID
        </Typography>
        <Typography variant="body1" fontWeight={500}>
          {batchId}
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">
          Duration
        </Typography>
        <Typography variant="body2">
          {duration}
        </Typography>
      </Box>

      {completion && (
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Completion
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              {completion}%
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={parseInt(completion)} 
            sx={{ 
              height: 6, 
              borderRadius: 1,
              bgcolor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                bgcolor: '#4caf50'
              }
            }} 
          />
        </Box>
      )}

      {pilotsCount && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
            Pilot Stats
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body2">
              Total: {pilotsCount.total}
            </Typography>
            {pilotsCount.passed !== undefined && (
              <Typography variant="body2">
                Pass: {pilotsCount.passed}
              </Typography>
            )}
            {pilotsCount.failed !== undefined && (
              <Typography variant="body2">
                Fail: {pilotsCount.failed}
              </Typography>
            )}
          </Box>
        </Box>
      )}

      <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button 
          variant="text" 
          size="small"
          sx={{ 
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
            fontWeight: 500
          }}
        >
          {status}
        </Typography>
      </Box>
    </Box>
  );
}