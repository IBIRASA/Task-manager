// Sidebar.tsx
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaUserFriends, FaEnvelope, FaCog } from 'react-icons/fa';
function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 text-white flex flex-col p-4">
      <div className="text-xl font-bold mb-8 flex items-center space-x-2">
        <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
          
        </div>
        <span className='text-gray-900'>Nuegas</span>
      </div>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-700 transition">
          <FaHome className="mr-3 text-gray-700" /> <span className='text-gray-700'> Overview</span> 
        </Link>
        <Link to="/task" className="flex items-center p-2 rounded hover:bg-gray-700 transition">
          <FaTasks className="mr-3 text-gray-700" />  <span className='text-gray-700'>Task</span> 
        </Link>
        <Link to="/mentors" className="flex items-center p-2 rounded hover:bg-gray-700 transition">
          <FaUserFriends className="mr-3 text-gray-700" />  <span className='text-gray-700'> Mentors</span> 
        </Link>
        <Link to="/messages" className="flex items-center p-2 rounded hover:bg-gray-700 transition">
          <FaEnvelope className="mr-3 text-gray-700" />  <span className='text-gray-700'> Message</span> 
        </Link>
        <Link to="/settings" className="flex items-center p-2 rounded hover:bg-gray-700 transition">
          <FaCog className="mr-3 text-gray-700" />  <span className='text-gray-700'> Setting</span> 
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
