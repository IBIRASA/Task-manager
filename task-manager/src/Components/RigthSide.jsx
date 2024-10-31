import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import profile from '../assets/profile.jpg';

function RightSidebar() {
  return (
    <div className="w-72 bg-gray-50 p-4 space-y-6">
      <div className="bg-white shadow rounded-lg p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">July 2022</h2>
        <div className="grid grid-cols-7 gap-2 mt-4 text-gray-600">
          <span>S</span> <span>M</span> <span>T</span> <span>W</span> <span>T</span> <span>F</span> <span>S</span>
          {[...Array(31)].map((_, i) => (
            <span
              key={i}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                i === 13 ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 cursor-pointer'
              }`}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Task Today</h3>
        <img
          src={profile}
          alt="Task"
          className="w-full h-32 rounded-lg mb-4 object-cover"
        />
        <div>
          <h4 className="text-gray-800 font-semibold">Creating Awesome Mobile Apps</h4>
          <p className="text-gray-500 text-sm">UI/UX Designer</p>
        </div>
        <div className="mt-2">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Progress</span>
            <span className="text-blue-600 font-semibold">90%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <FaClock className="text-gray-500" />
            <span>1 Hour</span>
          </div>
          <div className="flex -space-x-2">
            <img src={profile} alt="Profile 1" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src={profile} alt="Profile 2" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src={profile} alt="Profile 3" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src={profile} alt="Profile 4" className="w-6 h-6 rounded-full border-2 border-white" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h4 className="text-gray-800 font-semibold mb-4">Detail Task</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">1</span>
            <span className="text-gray-600 text-sm">Understanding the tools in Figma</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">2</span>
            <span className="text-gray-600 text-sm">Understand the basics of making designs</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">3</span>
            <span className="text-gray-600 text-sm">Design a mobile application with Figma</span>
          </div>
        </div>
        <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
          Go To Detail
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
