import { Box, Typography, Paper, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function BatchDetails() {
  return (
    <Box sx={{ p: 2, gap: 2, display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              ✓ Basic Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2">
                <strong>Batch Name:</strong> Drone Training 1
              </Typography>
              <Typography variant="body2">
                <strong>Batch ID:</strong> B001
              </Typography>
              <Typography variant="body2">
                <strong>Date:</strong> Aug 1 - Sep 1
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <strong>Status:</strong>
                <CheckCircleIcon color="success" fontSize="small" /> Completed
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              👨‍🏫 Instructor Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2">
                <strong>Instructor Name:</strong> Akshit Rajput
              </Typography>
              <Typography variant="body2">
                <strong>Instructor ID:</strong> SKRPTO00225
              </Typography>
              <Typography variant="body2">
                <strong>RPTO Name:</strong> Salam Kisan
              </Typography>
              <Typography variant="body2">
                <strong>Contact:</strong> akshit@salamkisan.com
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              📋 Training Schedule
            </Typography>
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