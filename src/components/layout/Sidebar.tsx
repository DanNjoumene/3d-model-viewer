import { UploadZone } from '../upload/UploadZone';
import { ModelStats } from '../stats/ModelStats';
import { PerformanceScore } from '../stats/PerformanceScore';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <UploadZone />
      <ModelStats />
      <PerformanceScore />
    </aside>
  );
};
