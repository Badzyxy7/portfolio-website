'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import MobileMenu from './MobileMenu';
import ResumeModal from './ResumeModal';
import { useTheme } from './ThemeContext';

export default function PortfolioWrapper() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const { isDark } = useTheme();

  return (
    <>
      <div className={`flex min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
        {/* Desktop Sidebar - Hidden on mobile/tablet */}
        <div className="hidden lg:block">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Mobile Header */}
          <header className={`lg:hidden sticky top-0 z-30 p-4 flex items-center justify-between ${
            isDark ? 'bg-dark-bg border-b border-dark-surface' : 'bg-light-bg border-b border-light-surface'
          }`}>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-lg ${isDark ? 'text-dark-text' : 'text-light-text'}`}
            >
              <Menu size={24} />
            </button>
            <h1 className={`text-lg font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              Portfolio
            </h1>
            <div className="w-10" /> {/* Spacer for centering */}
          </header>

          <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Desktop Right Sidebar - Hidden on mobile/tablet */}
        <div className="hidden xl:block">
          <RightSidebar />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onResumeClick={() => setShowResume(true)}
      />

      {/* Resume Modal */}
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  );
}
