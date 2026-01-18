'use client';

import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import ProjectsPage from './pages/ProjectsPage';
import DesignsPage from './pages/DesignsPage';

type MainContentProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function MainContent({ activeTab, setActiveTab }: MainContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'designs':
        return <DesignsPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto scrollbar-hide">
      {renderContent()}
    </main>
  );
}
