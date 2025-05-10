import { Box, Typography, Button } from '@mui/material';

export default function BatchCard({ batchId, duration, status, completion }) {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed': return 'success.main';
      case 'Ongoing': return 'error.main';
      case 'Upcoming': return 'warning.main';
      default: return 'primary.main';
    }
  };

  return (
    <Box sx={{ 
      p: 2, 
      bgcolor: '#fff', 
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      mb: 2 
    }}>
      <Typography variant="subtitle2" color="text.secondary">Batch ID</Typography>
      <Typography variant="body1" fontWeight="bold">{batchId}</Typography>
      <Typography variant="subtitle2" color="text.secondary" mt={1}>Duration</Typography>
      <Typography variant="body2">{duration}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Button variant="outlined" size="small">View Details</Button>
        <Typography 
          variant="button" 
          sx={{ 
            color: getStatusColor(),
            bgcolor: `${getStatusColor()}15`,
            px: 1,
            py: 0.5,
            borderRadius: 1
          }}
        >
          {status}
        </Typography>
      </Box>
      {completion && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          Completion: {completion}%
        </Typography>
      )}
    </Box>
  );
}