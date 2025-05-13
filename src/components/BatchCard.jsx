import { Box, Typography, Button } from '@mui/material';

export default function BatchCard({ batchId, duration, status, completion, pilotsCount }) {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed': return '#4caf50';
      case 'Ongoing': return '#dc3545';
      case 'Upcoming': return '#ffc107';
      default: return '#2196f3';
    }
  };

  return (
    <Box sx={{ 
      p: 2,
      bgcolor: '#fff', 
      borderRadius: 1,
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
            Batch ID
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {batchId}
          </Typography>
        </Box>
        {completion && (
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {completion}%
          </Typography>
        )}
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
          Duration
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {duration}
        </Typography>
      </Box>

      {pilotsCount && (
        <Box>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
            Pilot Stats
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pass: {pilotsCount.passed || 0}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fail: {pilotsCount.failed || 0}
          </Typography>
        </Box>
      )}

      <Box sx={{ 
        mt: 'auto', 
        pt: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Button 
          sx={{ 
            color: '#2196f3',
            textTransform: 'none',
            p: 0,
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
            px: 2,
            py: 0.5,
            borderRadius: 1,
            bgcolor: getStatusColor(),
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 500
          }}
        >
          {status}
        </Typography>
      </Box>
    </Box>
  );
}