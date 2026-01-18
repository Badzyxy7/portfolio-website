'use client';

import React, { useState } from 'react';
import { Brain, Database, LayoutDashboard, Code, Facebook, Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from './ThemeContext';
import SocialsModal from './SocialsModal';

export default function RightSidebar() {
  const { isDark } = useTheme();
  const [selectedSocial, setSelectedSocial] = useState<string | null>(null);

  const learningItems = [
    { icon: Brain, label: 'Improve Analytical Thinking', color: '#4a90e2' },
    { icon: Database, label: 'Enhance Data Storytelling', color: '#f39c12' },
    { icon: LayoutDashboard, label: 'Create Better Dashboards', color: '#2ecc71' },
    { icon: Code, label: 'Strengthen Security', color: '#9b59b6' },
  ];

  const socials = [
    { id: 'facebook', icon: Facebook, color: '#1877f2' },
    { id: 'email', icon: Mail, color: '#ea4335' },
    { id: 'github', icon: Github, color: '#333' },
    { id: 'linkedin', icon: Linkedin, color: '#0a66c2' },
  ];

  return (
    <>
      <aside className={`w-80 h-screen sticky top-0 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'} p-6 overflow-y-auto scrollbar-hide`}>
        {/* What I'm Learning */}
        <div className="mb-8">
          <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            What I'm Learning
          </h3>
          <div className="space-y-3">
            {learningItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl flex items-center gap-3 transition-all neo-card ${
                    isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
                  }`}
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            Get in Touch
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <button
                  key={social.id}
                  onClick={() => setSelectedSocial(social.id)}
                  className={`p-4 rounded-xl flex items-center justify-center transition-all neo-card ${
                    isDark ? 'bg-dark-surface shadow-neo-dark hover:shadow-neo-dark-inset' : 'bg-light-surface shadow-neo-light hover:shadow-neo-light-inset'
                  }`}
                >
                  <Icon
                    size={24}
                    style={{ color: isDark ? '#e4e9f0' : social.color }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <SocialsModal
        isOpen={!!selectedSocial}
        onClose={() => setSelectedSocial(null)}
        social={selectedSocial}
      />
    </>
  );
}
