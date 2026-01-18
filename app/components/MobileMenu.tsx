'use client';

import React from 'react';
import { Home, User, Award, Briefcase, Palette, X, Moon, Sun, FileText } from 'lucide-react';
import { useTheme } from './ThemeContext';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onResumeClick: () => void;
};

export default function MobileMenu({ isOpen, onClose, activeTab, setActiveTab, onResumeClick }: MobileMenuProps) {
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'designs', label: 'Designs', icon: Palette },
  ];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 lg:hidden ${
        isDark ? 'bg-dark-bg' : 'bg-light-bg'
      } ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="p-6 h-full flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`self-end p-2 rounded-lg mb-4 ${
              isDark ? 'text-dark-text hover:bg-dark-surface' : 'text-light-text hover:bg-light-surface'
            }`}
          >
            <X size={24} />
          </button>

          {/* Profile */}
          <div className="flex flex-col items-center mb-6">
            <h2 className={`text-lg font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              Shane Van L. Retes
            </h2>
            <p className={`text-sm ${isDark ? 'text-dark-secondary' : 'text-light-secondary'}`}>
              Web Developer / Graphic Designer
            </p>
          </div>

          {/* Resume Button */}
          <button
            onClick={() => {
              onResumeClick();
              onClose();
            }}
            className={`w-full py-3 px-4 rounded-xl mb-6 flex items-center justify-center gap-2 ${
              isDark ? 'bg-dark-surface text-dark-text' : 'bg-light-surface text-light-text'
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
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full py-3 px-4 rounded-xl mb-3 flex items-center gap-3 ${
                    activeTab === item.id
                      ? isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-white'
                      : isDark ? 'bg-dark-surface text-dark-text' : 'bg-light-surface text-light-text'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-3 ${
              isDark ? 'bg-dark-surface text-dark-text' : 'bg-light-surface text-light-text'
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </>
  );
}
