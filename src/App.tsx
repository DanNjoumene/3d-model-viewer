import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Viewport } from './components/viewport/Viewport';
import { ControlsPanel } from './components/layout/ControlsPanel';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <Viewport />
      <ControlsPanel />
    </div>
  );
}

export default App;
