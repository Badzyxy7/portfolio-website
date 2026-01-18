'use client';

import React, { useState } from 'react';
import { Home, User, Award, Briefcase, Palette, Moon, Sun, FileText } from 'lucide-react';
import { useTheme } from './ThemeContext';
import ResumeModal from './ResumeModal';

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const { isDark, toggleTheme } = useTheme();
  const [showResume, setShowResume] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'designs', label: 'Designs', icon: Palette },
  ];

  return (
    <>
      <aside className={`w-64 h-screen sticky top-0 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'} p-6 flex flex-col`}>
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Profile Picture - PUT YOUR IMAGE HERE */}
          <div className={`w-24 h-24 rounded-full mb-4 overflow-hidden ${isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'}`}>
            <img
              src="/images/profile.jpg"  
              alt="Shane Van L. Retes"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-24 h-24 flex items-center justify-center ${isDark ? 'bg-dark-surface' : 'bg-light-surface'}">
                      <svg class="${isDark ? 'text-dark-primary' : 'text-light-primary'}" width="80" height="80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  `;
                }
              }}
            />
          </div>
          <h2 className={`text-lg font-bold text-center ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            Shane Van L. Retes
          </h2>
          <p className={`text-sm mt-1 text-center ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
            Web Developer / Graphic Designer
          </p>
        </div>

        {/* Resume Button */}
        <button
          onClick={() => setShowResume(true)}
          className={`w-full py-3 px-4 rounded-xl mb-6 flex items-center justify-center gap-2 font-medium transition-all ${
            isDark 
              ? 'bg-dark-surface text-dark-text shadow-neo-dark hover:shadow-neo-dark-inset' 
              : 'bg-light-surface text-light-text shadow-neo-light hover:shadow-neo-light-inset'
          }`}
        >
          <FileText size={18} />
          Resume
        </button>

        {/* Navigation */}
        <nav className="flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full py-3 px-4 rounded-xl mb-3 flex items-center gap-3 transition-all ${
                  activeTab === item.id
                    ? isDark
                      ? 'bg-dark-primary text-white shadow-neo-dark'
                      : 'bg-light-primary text-white shadow-neo-light'
                    : isDark
                    ? 'bg-dark-surface text-dark-text shadow-neo-dark hover:shadow-neo-dark-inset'
                    : 'bg-light-surface text-light-text shadow-neo-light hover:shadow-neo-light-inset'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`w-full py-3 px-4 rounded-xl mb-4 flex items-center justify-center gap-3 transition-all ${
            isDark 
              ? 'bg-dark-surface text-dark-text shadow-neo-dark hover:shadow-neo-dark-inset' 
              : 'bg-light-surface text-light-text shadow-neo-light hover:shadow-neo-light-inset'
          }`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        {/* Copyright */}
        <p className={`text-xs text-center ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
          © 2026 Shane Van L. Retes. All rights reserved.
        </p>
      </aside>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  );
}
