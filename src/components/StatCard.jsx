import { Box, Typography } from '@mui/material';

export default function StatCard({ title, value, subtitle, icon }) {
  return (
    <Box sx={{ 
      bgcolor: '#fff',
      p: 2.5,
      borderRadius: 2,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      minWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
      flex: 1,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        bgcolor: '#f8fafc'
      }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {icon && (
          <Box sx={{ 
            bgcolor: '#e3f2fd', 
            p: 1.5, 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: '#bbdefb'
            }
          }}>
            {icon}
          </Box>
        )}
        <Typography variant="h4" sx={{ fontWeight: 600, color: '#1976d2' }}>
          {value}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ color: '#1f2937', fontWeight: 500, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}