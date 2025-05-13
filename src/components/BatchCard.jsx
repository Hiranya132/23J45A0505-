import { Box, Typography, Button, LinearProgress } from '@mui/material';

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
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Batch ID
        </Typography>
        <Typography variant="body1">
          {batchId}
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Duration
        </Typography>
        <Typography variant="body2">
          {duration}
        </Typography>
      </Box>

      {pilotsCount && (
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
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

      {completion && (
        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">Completion</Typography>
            <Typography variant="body2" fontWeight={500}>{completion}%</Typography>
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

      <Box sx={{ 
        mt: 'auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        pt: 2,
        borderTop: '1px solid #eee'
      }}>
        <Button 
          variant="text"
          size="small"
          sx={{ 
            color: '#1976d2',
            textTransform: 'none',
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
            color: '#fff',
            bgcolor: getStatusColor(),
            px: 2,
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