import { Box, Typography } from '@mui/material';

export default function StatCard({ title, value, subtitle }) {
  return (
    <Box sx={{ 
      bgcolor: '#fff',
      p: 3,
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center',
      minWidth: 250,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }}>
      <Typography variant="h3" fontWeight="bold" color="primary">
        {value}
      </Typography>
      <Typography variant="body1" color="text.primary" fontWeight="medium">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  );
}