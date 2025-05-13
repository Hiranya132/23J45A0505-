import { Box } from '@mui/material';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import BatchCard from './components/BatchCard';
import BatchDetails from './components/BatchDetails';
import PilotList from './components/PilotList';
import NotificationPage from './components/NotificationPage';
import ProfilePage from './components/ProfilePage';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function App() {
  const [selectedView, setSelectedView] = useState('dashboard');

  const renderContent = () => {
    switch (selectedView) {
      case 'dashboard':
        return (
          <>
            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              <StatCard 
                title="Total No. of Pilots" 
                value="450" 
                subtitle="Trained and Intraining" 
                icon={<GroupIcon sx={{ color: '#1976d2' }} />}
              />
              <StatCard 
                title="Pass Rate" 
                value="300" 
                subtitle="Trained" 
                icon={<SchoolIcon sx={{ color: '#1976d2' }} />}
              />
              <StatCard 
                title="Pilots in Training" 
                value="150" 
                subtitle="Running" 
                icon={<PendingActionsIcon sx={{ color: '#1976d2' }} />}
              />
              <StatCard 
                title="Total Success" 
                value="70" 
                subtitle="Completed and Running" 
                icon={<TrendingUpIcon sx={{ color: '#1976d2' }} />}
              />
              <StatCard 
                title="Success Rate" 
                value="84.66%" 
                subtitle="Overall Performance" 
                icon={<EmojiEventsIcon sx={{ color: '#1976d2' }} />}
              />
            </Box>
            
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: 2,
              mt: 3 
            }}>
              {[...Array(12)].map((_, index) => (
                <BatchCard 
                  key={`B00${index + 1}`}
                  batchId={`B00${index + 1}`}
                  duration="01 Aug 2023 - 01 Sep 2023"
                  status={index < 3 ? "Completed" : index < 8 ? "Ongoing" : "Upcoming"}
                  completion={index < 3 ? (75 + index * 5).toString() : undefined}
                  pilotsCount={{
                    total: 20,
                    passed: index < 3 ? 15 : undefined,
                    failed: index < 3 ? 5 : undefined
                  }}
                />
              ))}
            </Box>
          </>
        );
      case 'batch-details':
        return (
          <>
            <BatchDetails />
            <PilotList />
          </>
        );
      case 'notification':
        return <NotificationPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Sidebar onViewChange={setSelectedView} selectedView={selectedView} />
      <Box sx={{ flex: 1, p: 3, overflowY: 'auto' }}>
        {renderContent()}
      </Box>
    </Box>
  );
}

export default App;