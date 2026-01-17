'use client';

import React from 'react';
import { X } from 'lucide-react';
import { useTheme } from './ThemeContext';

type SocialsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  social: string | null;
};

export default function SocialsModal({ isOpen, onClose, social }: SocialsModalProps) {
  const { isDark } = useTheme();

  if (!isOpen || !social) return null;

  const socialLinks: { [key: string]: { label: string; value: string } } = {
    facebook: { label: 'Facebook', value: 'https://facebook.com/scrmbldshane' },
    email: { label: 'Email', value: 'retesshanevan@gmail.com' },
    github: { label: 'GitHub', value: 'https://github.com/Badzyxy7' },
    linkedin: { label: 'LinkedIn', value: 'https://linkedin.com/in/shanevanretes' },
  };

  const currentSocial = socialLinks[social];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className={`max-w-md w-full rounded-2xl p-8 ${
          isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
            {currentSocial.label}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${isDark ? 'hover:bg-dark-bg' : 'hover:bg-light-bg'}`}
          >
            <X size={24} className={isDark ? 'text-dark-text' : 'text-light-text'} />
          </button>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
          {social === 'email' ? (
            <p className={`text-center ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
              {currentSocial.value}
            </p>
          ) : (
            <a
              href={currentSocial.value}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center hover:underline ${isDark ? 'text-dark-primary' : 'text-light-primary'}`}
            >
              {currentSocial.value}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
