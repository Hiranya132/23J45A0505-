import { Box, Typography } from '@mui/material';

export default function StatCard({ title, value, subtitle, icon }) {
  return (
    <Box sx={{ 
      bgcolor: '#fff',
      p: 2.5,
      borderRadius: 1,
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      minWidth: 200,
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
        <Typography variant="h4" sx={{ color: '#2196f3', fontWeight: 600 }}>
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