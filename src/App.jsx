import { Box } from '@mui/material';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import BatchCard from './components/BatchCard';
import BatchDetails from './components/BatchDetails';
import PilotList from './components/PilotList';

function App() {
  const [selectedView, setSelectedView] = useState('dashboard');

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Sidebar onViewChange={setSelectedView} />
      <Box sx={{ flex: 1, p: 4 }}>
        {selectedView === 'dashboard' ? (
          <>
            <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
              <StatCard title="Total No. of Pilots" value="450" subtitle="Trained and Intraining" />
              <StatCard title="Pass Rate" value="300" subtitle="Trained" />
              <StatCard title="Pilots in Training" value="150" subtitle="Running" />
              <StatCard title="Success Rate" value="84.66%" subtitle="Completed and Running" />
            </Box>
            
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gap: 3,
              mt: 4 
            }}>
              <BatchCard 
                batchId="B001"
                duration="01 Aug 2023 - 01 Sep 2023"
                status="Completed"
                completion="75"
              />
              <BatchCard 
                batchId="B002"
                duration="01 Aug 2023 - 01 Sep 2023"
                status="Ongoing"
              />
              <BatchCard 
                batchId="B003"
                duration="01 Aug 2023 - 01 Sep 2023"
                status="Ongoing"
              />
              <BatchCard 
                batchId="B004"
                duration="01 Aug 2023 - 01 Sep 2023"
                status="Upcoming"
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