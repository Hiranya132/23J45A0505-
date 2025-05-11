import { Box, Typography, Paper, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function BatchDetails() {
  return (
    <Box sx={{ p: 2, gap: 2, display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2.5, height: '100%', borderRadius: 1, bgcolor: '#f8f9fa' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <CheckCircleIcon sx={{ color: '#4caf50' }} />
              <Typography variant="h6">Basic Information</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Batch Name</Typography>
                <Typography variant="body1">Drone Training 1</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Batch ID</Typography>
                <Typography variant="body1">B001</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Date</Typography>
                <Typography variant="body1">Aug 1 - Sep 1</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Status</Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} /> Completed
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2.5, height: '100%', borderRadius: 1, bgcolor: '#f8f9fa' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <img 
                src="https://images.pexels.com/photos/3864903/pexels-photo-3864903.jpeg?auto=compress&cs=tinysrgb&w=30" 
                alt="Instructor" 
                style={{ width: 24, height: 24, borderRadius: '50%' }} 
              />
              <Typography variant="h6">Instructor Info</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Instructor Name</Typography>
                <Typography variant="body1">Akshit Rajput</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Instructor ID</Typography>
                <Typography variant="body1">SKRPTO00225</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">RPTO Name</Typography>
                <Typography variant="body1">Salam Kisan</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">Contact</Typography>
                <Typography variant="body1">akshit@salamkisan.com</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2.5, height: '100%', borderRadius: 1, bgcolor: '#f8f9fa' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <img 
                src="https://images.pexels.com/photos/3864903/pexels-photo-3864903.jpeg?auto=compress&cs=tinysrgb&w=30" 
                alt="Schedule" 
                style={{ width: 24, height: 24, borderRadius: '50%' }} 
              />
              <Typography variant="h6">Training Schedule</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2">Day 1: Onboarding & Document Verification</Typography>
              <Typography variant="body2">Day 2 to Day 4: Theoretical Training</Typography>
              <Typography variant="body2">Day 5 to Day 11: On-Field Training</Typography>
              <Typography variant="body2">Day 12: On-Field Test</Typography>
              <Typography variant="body2">Day 13: Additional On-Field Test (If Required)</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}