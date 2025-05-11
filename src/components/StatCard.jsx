import { Box, Typography } from '@mui/material';

export default function StatCard({ title, value, subtitle, icon }) {
  return (
    <Box sx={{ 
      bgcolor: '#fff',
      p: 2.5,
      borderRadius: 1,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      minWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      flex: 1
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {icon && (
          <Box sx={{ 
            bgcolor: '#f5f5f5', 
            p: 1, 
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {icon}
          </Box>
        )}
        <Typography variant="h4" sx={{ fontWeight: 500, color: '#1976d2' }}>
          {value}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ color: '#333', fontWeight: 500, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}