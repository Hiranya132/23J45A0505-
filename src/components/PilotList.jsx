import { 
  Box, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button,
  Avatar,
  Typography,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const pilots = [
  {
    id: 'DT70020501',
    photo: 'https://i.pravatar.cc/150?img=1',
    name: 'Sai Patil',
    rptoName: 'Salam Kisan',
    dateOfEnrollment: '25/12/2022',
    instructor: 'Satish Pawar',
    dateOfDeployment: '25/12/2022',
    location: '421203',
    status: 'Passed',
    comment: '—',
    scheduleMeeting: '—'
  },
  {
    id: 'DT70020502',
    photo: 'https://i.pravatar.cc/150?img=2',
    name: 'Tanmay Pawar',
    rptoName: 'Salam Kisan',
    dateOfEnrollment: '25/12/2022',
    instructor: 'Satish Pawar',
    dateOfDeployment: '25/12/2022',
    location: '421203',
    status: 'Failed',
    comment: 'Needs to retake assessment',
    scheduleMeeting: 'Schedule'
  },
  {
    id: 'DT70020503',
    photo: 'https://i.pravatar.cc/150?img=3',
    name: 'Ayush Chavan',
    rptoName: 'Salam Kisan',
    dateOfEnrollment: '25/12/2022',
    instructor: 'Satish Pawar',
    dateOfDeployment: '25/12/2022',
    location: '421203',
    status: 'Pending',
    comment: '—',
    scheduleMeeting: '—'
  }
];

export default function PilotList() {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}>
        <TextField
          placeholder="Search here"
          size="small"
          sx={{ minWidth: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>PHOTO</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>RPTO NAME</TableCell>
              <TableCell>DATE OF ENROLLMENT</TableCell>
              <TableCell>INSTRUCTOR</TableCell>
              <TableCell>DATE OF DEPLOYMENT</TableCell>
              <TableCell>LOCATION</TableCell>
              <TableCell>ACTION</TableCell>
              <TableCell>COMMENT</TableCell>
              <TableCell>SCHEDULE MEETING</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pilots.map((pilot) => (
              <TableRow key={pilot.id}>
                <TableCell>
                  <Avatar src={pilot.photo} />
                </TableCell>
                <TableCell>{pilot.name}</TableCell>
                <TableCell>{pilot.id}</TableCell>
                <TableCell>{pilot.rptoName}</TableCell>
                <TableCell>{pilot.dateOfEnrollment}</TableCell>
                <TableCell>{pilot.instructor}</TableCell>
                <TableCell>{pilot.dateOfDeployment}</TableCell>
                <TableCell>{pilot.location}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                      size="small" 
                      variant="contained" 
                      color="success"
                      sx={{ minWidth: 'auto', px: 1 }}
                    >
                      Pass
                    </Button>
                    <Button 
                      size="small" 
                      variant="contained" 
                      color="error"
                      sx={{ minWidth: 'auto', px: 1 }}
                    >
                      Fail
                    </Button>
                  </Box>
                </TableCell>
                <TableCell>{pilot.comment}</TableCell>
                <TableCell>
                  {pilot.scheduleMeeting === '—' ? (
                    '—'
                  ) : (
                    <Button size="small" variant="contained" color="primary">
                      Schedule
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    sx={{
                      bgcolor: pilot.status === 'Passed' ? 'success.light' : 'error.light',
                      color: pilot.status === 'Passed' ? 'success.dark' : 'error.dark',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    {pilot.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}