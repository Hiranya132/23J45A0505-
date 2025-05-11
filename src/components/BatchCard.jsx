import { Box, Typography, Button } from '@mui/material';

export default function BatchCard({ batchId, duration, status, completion }) {
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
      p: 3, 
      bgcolor: '#fff', 
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      mb: 2,
      '&:hover': {
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
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
            fontSize: '0.75rem'
          }}
        >
          {status}
        </Typography>
      </Box>
      
      <Typography variant="subtitle2" color="text.secondary">Duration</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>{duration}</Typography>
      
      {completion && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">Completion</Typography>
          <Typography variant="body2">{completion}%</Typography>
        </Box>
      )}
      
      <Button 
        variant="outlined" 
        size="small" 
        fullWidth
        sx={{ 
          mt: 1,
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