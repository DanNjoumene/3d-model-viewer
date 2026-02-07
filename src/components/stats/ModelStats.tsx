import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../ui/Panel';

const StatRow = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
  );
};

export const ModelStats = () => {
  const { stats } = useAppStore();

  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <Panel title="Model Info">
      <div className="stat-grid">
        <StatRow
          label="Vertex Count"
          value={stats?.vertexCount ? formatNumber(stats.vertexCount) : '—'}
        />
        <StatRow
          label="Triangle Count"
          value={stats?.triangleCount ? formatNumber(stats.triangleCount) : '—'}
        />
        <StatRow
          label="Meshes"
          value={stats?.meshCount ?? '—'}
        />
        <StatRow
          label="Materials"
          value={stats?.materialCount ?? '—'}
        />
        <StatRow
          label="Dimensions"
          value={
            stats?.dimensions
              ? `${stats.dimensions.width.toFixed(1)} × ${stats.dimensions.height.toFixed(1)} × ${stats.dimensions.depth.toFixed(1)}`
              : '— × — × —'
          }
        />
      </div>
    </Panel>
  );
};
