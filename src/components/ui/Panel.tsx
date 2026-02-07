import { ReactNode } from 'react';

interface PanelProps {
  title: string;
  children: ReactNode;
}

export const Panel = ({ title, children }: PanelProps) => {
  return (
    <div className="panel">
      <h2 className="panel-title">{title}</h2>
      {children}
    </div>
  );
};
