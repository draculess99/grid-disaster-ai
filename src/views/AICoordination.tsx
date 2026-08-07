import AgentCard from '../components/AgentCard';
import { useSimulation } from '../state/SimulationContext';
import { ANALYSIS_STAGES } from '../data/scenarioData';

const STAGE_COLORS = [
  '#3b82f6',
  '#6366f1',
  '#8b5cf6',
  '#a855f7',
  '#ef4444',
  '#f97316',
  '#22c55e',
];

export default function AICoordination() {
  const { state } = useSimulation();

  const isAnalyzing = state.incidentState === 'AI_ANALYSIS' || state.incidentState === 'AWAITING_HUMAN_AUTHORIZATION';
  const currentStage = state.currentAnalysisStage;

  return (
    <div className="p-5 overflow-y-auto h-[calc(100vh-52px)]">
      <div className="mb-4">
        <h1 className="text-lg font-bold text-[#e2e8f0] tracking-wide">AI COORDINATION</h1>
        <p className="text-xs text-[#64748b] mt-0.5">Specialist agent deliberation and conflict resolution</p>
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <div className="bg-[#0f1729] border border-[#1e3a5f] rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-semibold text-[#e2e8f0]">ANALYSIS PROGRESS</h2>
            <span className="text-[10px] font-mono text-[#64748b]">
              Stage {Math.min(currentStage + 1, ANALYSIS_STAGES.length)}/{ANALYSIS_STAGES.length}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {ANALYSIS_STAGES.map((stage, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full h-1.5 rounded-full transition-all duration-300 ${
                    i <= currentStage ? 'opacity-100' : 'opacity-20'
                  }`}
                  style={{
                    backgroundColor: i <= currentStage ? STAGE_COLORS[i] : '#1e3a5f',
                    boxShadow: i === currentStage ? `0 0 6px ${STAGE_COLORS[i]}` : 'none',
                  }}
                />
                <span
                  className={`text-[7px] text-center leading-tight ${
                    i <= currentStage ? 'text-[#94a3b8]' : 'text-[#1e3a5f]'
                  }`}
                >
                  {stage}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 text-center">
            <span
              className="text-[10px] font-bold tracking-wide"
              style={{ color: currentStage < ANALYSIS_STAGES.length ? STAGE_COLORS[currentStage] : '#22c55e' }}
            >
              {currentStage < ANALYSIS_STAGES.length
                ? `► ${ANALYSIS_STAGES[currentStage]}`
                : '✓ ANALYSIS COMPLETE'}
            </span>
          </div>
        </div>
      )}

      {/* Agent Grid */}
      {!isAnalyzing && state.incidentState === 'MONITORING' && (
        <div className="bg-[#0f1729] border border-[#1e3a5f] rounded-lg p-8 flex items-center justify-center">
          <div className="text-center">
            <span className="text-3xl mb-2 block">🤖</span>
            <p className="text-sm text-[#64748b]">AI agents are standing by</p>
            <p className="text-xs text-[#475569] mt-1">Launch a disaster scenario to activate agent coordination</p>
          </div>
        </div>
      )}

      {/* Recovery Commander highlighted differently */}
      {state.agents.length > 0 && (isAnalyzing || state.incidentState !== 'MONITORING') && (
        <div className="space-y-4">
          {/* Commander card full width */}
          <div className="w-full">
            <AgentCard agentId={5} />
          </div>

          {/* Four specialist agents in grid */}
          <div className="grid grid-cols-2 gap-4">
            <AgentCard agentId={1} />
            <AgentCard agentId={2} />
            <AgentCard agentId={3} />
            <AgentCard agentId={4} />
          </div>
        </div>
      )}
    </div>
  );
}