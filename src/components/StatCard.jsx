import { Box, Typography } from '@mui/material';

export default function StatCard({ title, value, subtitle, icon }) {
  return (
    <Box sx={{ 
      bgcolor: '#fff',
      p: 3,
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      minWidth: 220,
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
      flex: 1
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {icon && (
          <Box sx={{ 
            bgcolor: '#e3f2fd', 
            p: 1, 
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {icon}
          </Box>
        )}
        <Typography variant="h4" fontWeight="bold" color="primary">
          {value}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" color="text.primary" fontWeight="medium" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}