import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaUserFriends, FaCog, FaQuestion } from 'react-icons/fa';
import { FaBookOpen, FaEnvelope } from 'react-icons/fa6'; // Correct icons

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white text-white flex flex-col p-4 justify-between">
      <div>
        <div className="text-xl font-bold mb-8 flex items-center space-x-2">
          <div className="bg-blue-500 w-8 h-8 rounded-md flex items-center justify-center">
            <FaBookOpen className="text-gray-100" />
          </div>
          <span className="text-gray-900">Nuegas</span>
        </div>
        <nav className="space-y-4">
          <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-100 transition">
            <FaHome className="mr-3 text-gray-500" /> <span className="text-gray-400">Overview</span>
          </Link>
          <Link to="/task" className="flex items-center p-2 rounded hover:bg-gray-100 transition">
            <FaTasks className="mr-3 text-gray-500" /> <span className="text-gray-400">Task</span>
          </Link>
          <Link to="/mentors" className="flex items-center p-2 rounded hover:bg-gray-100 transition">
            <FaUserFriends className="mr-3 text-gray-500" /> <span className="text-gray-400">Mentors</span>
          </Link>
          <Link to="/messages" className="flex items-center p-2 rounded hover:bg-gray-100 transition">
            <FaEnvelope className="mr-3 text-gray-500" /> <span className="text-gray-400">Message</span>
          </Link>
          <Link to="/settings" className="flex items-center p-2 rounded hover:bg-gray-100 transition">
            <FaCog className="mr-3 text-gray-500" /> <span className="text-gray-400">Setting</span>
          </Link>
        </nav>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg mt-8 text-center">
        <div className="flex items-center justify-center mb-2">
          <FaQuestion className="text-white text-2xl" />
        </div>
        <h3 className="text-white text-lg font-semibold">Help Center</h3>
        <p className="text-gray-300 text-sm mt-1">Having trouble in learning? Please contact us for more questions.</p>
        <Link to="/help-center" className="mt-4 inline-block bg-white text-gray-800 font-semibold py-2 px-4 rounded-md">
          Go To Help Center
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
