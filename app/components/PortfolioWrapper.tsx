'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import { useTheme } from './ThemeContext';

export default function PortfolioWrapper() {
  const [activeTab, setActiveTab] = useState('home');
  const { isDark } = useTheme();

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab} />
      <RightSidebar />
    </div>
  );
}
