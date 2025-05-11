import { Box } from '@mui/material';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import BatchCard from './components/BatchCard';
import BatchDetails from './components/BatchDetails';
import PilotList from './components/PilotList';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function App() {
  const [selectedView, setSelectedView] = useState('dashboard');

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Sidebar onViewChange={setSelectedView} />
      <Box sx={{ flex: 1, p: 4 }}>
        {selectedView === 'dashboard' ? (
          <>
            <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
              <StatCard 
                title="Total No. of Pilots" 
                value="450" 
                subtitle="Trained and Intraining" 
                icon={<GroupIcon color="primary" />}
              />
              <StatCard 
                title="Pass Rate" 
                value="300" 
                subtitle="Trained" 
                icon={<SchoolIcon color="primary" />}
              />
              <StatCard 
                title="Pilots in Training" 
                value="150" 
                subtitle="Running" 
                icon={<PendingActionsIcon color="primary" />}
              />
              <StatCard 
                title="Success Rate" 
                value="84.66%" 
                subtitle="Completed and Running" 
                icon={<TrendingUpIcon color="primary" />}
              />
              <StatCard 
                title="Total Batches" 
                value="12" 
                subtitle="Active and Completed" 
                icon={<EmojiEventsIcon color="primary" />}
              />
            </Box>
            
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: 3,
              mt: 4 
            }}>
              <BatchCard 
                batchId="B001"
                duration="01 Aug 2023 - 01 Sep 2023"
                status="Completed"
                completion="75"
                pilotsCount={{ total: 20, passed: 15, failed: 5 }}
              />
              <BatchCard 
                batchId="B002"
                duration="01 Aug 2023 - 01 Sep 2023"
                status="Ongoing"
                pilotsCount={{ total: 18, inProgress: 18 }}
              />
              <BatchCard 
                batchId="B003"
                duration="01 Aug 2023 - 01 Sep 2023"
                status="Ongoing"
                pilotsCount={{ total: 15, inProgress: 15 }}
              />
              <BatchCard 
                batchId="B004"
                duration="01 Aug 2023 - 01 Sep 2023"
                status="Upcoming"
                pilotsCount={{ total: 20 }}
              />
            </Box>
          </>
        ) : (
          <>
            <BatchDetails />
            <PilotList />
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;