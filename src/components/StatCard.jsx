import { Box, Typography } from '@mui/material';

export default function StatCard({ title, value, subtitle }) {
  return (
    <Box sx={{ 
      bgcolor: '#fff',
      p: 2,
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center',
      minWidth: 200
    }}>
      <Typography variant="h4" fontWeight="bold" color="primary">
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
        {subtitle}
      </Typography>
    </Box>
  );
}