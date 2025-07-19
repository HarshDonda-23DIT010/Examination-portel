import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      <div className="pt-0">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;