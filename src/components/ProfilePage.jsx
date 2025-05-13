import { Box, Typography, Button, Grid, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ProfilePage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 4 }}>Pilot Details</Typography>
      
      <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
        <Avatar
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg"
          sx={{ width: 120, height: 120 }}
        />
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>Rohit Yadav</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
            Pilot ID: PPLT002301
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
            Jalna, Maharashtra
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
            +91 4343523311
          </Typography>
          <Typography variant="body1" color="text.secondary">
            rohityadav3@gmail.com
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 2, display: 'flex', gap: 4 }}>
        <Typography variant="body1">
          Drone UIN: IND-DRN-098765
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />
          <Typography>Certified</Typography>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ mb: 3, mt: 4 }}>Training & Certification</Typography>
      
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
              RPTO Name
            </Typography>
            <Typography variant="body1">Salam Kisan</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
              Instructor Name
            </Typography>
            <Typography variant="body1">Satish Pawar</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
              Flight Permit Validity
            </Typography>
            <Typography variant="body1">10 years</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
              Batch ID
            </Typography>
            <Typography variant="body1">BATCHSK001</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
              Certificate Number
            </Typography>
            <Typography variant="body1">SK-RPTO-2301</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
              Certification Status
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />
              <Typography>Certified</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
              Training Duration
            </Typography>
            <Typography variant="body1">01/01/2023 - 31/01/2023</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>
              Date of Joining
            </Typography>
            <Typography variant="body1">15th Jan 2024</Typography>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mb: 3 }}>Documents</Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>Aadhar Card</Typography>
            <Button
              startIcon={<VisibilityIcon />}
              sx={{ color: '#1976d2' }}
            >
              View
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>Passport Photo</Typography>
            <Button
              startIcon={<VisibilityIcon />}
              sx={{ color: '#1976d2' }}
            >
              View
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}