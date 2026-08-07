import { SimulationProvider, useSimulation } from './state/SimulationContext';
import Sidebar from './components/Sidebar';
import GlobalHeader from './components/GlobalHeader';
import CommandCenter from './views/CommandCenter';
import GridNetwork from './views/GridNetwork';
import AICoordination from './views/AICoordination';
import RecoveryPlan from './views/RecoveryPlan';
import IncidentTimeline from './views/IncidentTimeline';

function MainContent() {
  const { state } = useSimulation();

  const renderView = () => {
    switch (state.selectedView) {
      case 'command-center':
        return <CommandCenter />;
      case 'grid-network':
        return <GridNetwork />;
      case 'ai-coordination':
        return <AICoordination />;
      case 'recovery-plan':
        return <RecoveryPlan />;
      case 'incident-timeline':
        return <IncidentTimeline />;
      default:
        return <CommandCenter />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0e17] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <GlobalHeader />
        <main className="flex-1 overflow-hidden">
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SimulationProvider>
      <MainContent />
    </SimulationProvider>
  );
}