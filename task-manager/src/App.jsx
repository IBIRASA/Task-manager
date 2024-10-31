
import Sidebar from './Components/Sidebar';
import MainContent from '../src/Pages/Maincontent.jsx';
import RightSidebar from './Components/RigthSide.jsx';
function App() {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <MainContent />
    <RightSidebar/>
  </div>
  );
}

export default App;


