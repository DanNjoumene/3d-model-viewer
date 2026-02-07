import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../ui/Panel';

const MetricItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="metric-item">
      <span className="metric-label">{label}</span>
      <span className="metric-value">{value}</span>
    </div>
  );
};

export const PerformanceScore = () => {
  const { performance } = useAppStore();

  const scoreColor =
    performance?.status === 'good'
      ? 'var(--status-good)'
      : performance?.status === 'moderate'
      ? 'var(--status-moderate)'
      : 'var(--status-poor)';

  const gradientDegrees = (performance?.score || 0) * 3.6; // Convert 0-100 to 0-360 degrees

  return (
    <Panel title="Performance">
      <div className="performance-score">
        <div
          className="score-circle"
          style={{
            background: `conic-gradient(${scoreColor} 0deg, ${scoreColor} ${gradientDegrees}deg, var(--bg-primary) ${gradientDegrees}deg)`,
          }}
        >
          <div className="score-value" style={{ color: scoreColor }}>
            {performance?.score || 0}
          </div>
        </div>
        <div className="score-label">Overall Score</div>
      </div>

      {performance && (
        <>
          <div className="metrics-grid">
            <MetricItem
              label="File Size"
              value={`${(performance.fileSize / 1_000_000).toFixed(1)} MB`}
            />
            <MetricItem
              label="Texture Memory"
              value={`${(performance.textureMemory / 1_000_000).toFixed(1)} MB`}
            />
            <MetricItem
              label="Triangle Count"
              value={performance.triangleCount.toLocaleString()}
            />
          </div>

          {performance.tips.length > 0 && (
            <div className="optimization-tips">
              <h4>Optimization Tips</h4>
              <ul>
                {performance.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </Panel>
  );
};
