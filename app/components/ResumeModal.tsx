'use client';

import React from 'react';
import { X, Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from './ThemeContext';

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 ${
          isDark ? 'bg-dark-surface shadow-neo-dark' : 'bg-light-surface shadow-neo-light'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>Resume</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${isDark ? 'hover:bg-dark-bg' : 'hover:bg-light-bg'}`}
          >
            <X size={24} className={isDark ? 'text-dark-text' : 'text-light-text'} />
          </button>
        </div>

        <div className={isDark ? 'text-dark-text' : 'text-light-text'}>
          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+63 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Makati City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <GraduationCap size={20} />
              Education
            </h3>
            <div className={`p-4 rounded-xl ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
              <h4 className="font-semibold">Bachelor of Science in Hotel and Restaurant Management</h4>
              <p className={isDark ? 'text-dark-secondary' : 'text-light-secondary'}>STI College Alabang</p>
              <p className="text-sm">2021 - 2026 (Expected)</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Briefcase size={20} />
              Experience
            </h3>
            <div className="space-y-4">
              <div className={`p-4 rounded-xl ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
                <h4 className="font-semibold">Business Owner</h4>
                <p className={isDark ? 'text-dark-secondary' : 'text-light-secondary'}>PisoNet Computer Cafe</p>
                <p className="text-sm mb-2">2020 - Present</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Developed custom business management systems</li>
                  <li>Managed daily operations and customer service</li>
                </ul>
              </div>
              <div className={`p-4 rounded-xl ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}>
                <h4 className="font-semibold">Freelance Web Developer & Designer</h4>
                <p className={isDark ? 'text-dark-secondary' : 'text-light-secondary'}>Self-Employed</p>
                <p className="text-sm mb-2">2021 - Present</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>UI/UX design and implementation</li>
                  <li>Full-stack web application development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['C#', 'JavaScript', 'React', 'Next.js', 'MySQL', 'Tailwind CSS', 'UI/UX Design', 'Windows Forms'].map(
                (skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'
                    }`}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
