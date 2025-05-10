import type { AppInfo } from '../models/appInfo.model';

const APP_INFO: AppInfo = {
  title: 'ApplyIQ',
  tagline: "AI-powered job tracker",
  description: "ApplyIQ helps you take control of your job search with smart tools that save time and cut stress. Track applications, auto-generate tailored cover letters, and let AI update your status from job-related emails—so you can stay organized and focused on landing your next role.",
  createdAt: '2025-05-01T12:00:00Z',
  createdBy: {
    name: 'Travis Shanhun',
    codingTag: 'Shanhun-Codes',
    email: 'shanhun.codes@gmail.com',
    website: 'https://www.shanhun-codes.com'
  },
  contributors: [
    {
      name: 'Travis Shanhun',
      githubUrl: 'https://github.com/Shanhun-Codes',
      role: 'Full Stack Developer',
    },
  ],
  version: '0.9.0',
  status: 'alpha',
  tags: ['job-tracker', 'AI', 'angular', 'rails'],
  lastUpdated: '2025-05-08T16:00:00Z',
  repoUrl: 'https://github.com/Shanhun-Codes/ApplyIQ-Angular-Front-End',
  deployedUrl: 'https://applyiq.netlify.app',
  license: 'MIT',
  techStack: ['Angular', 'Rails', 'PostgreSQL', 'TailwindCSS', 'OpenAI'],
  changelog: [
    {
      date: '2025-05-08',
      summary: 'Initial MVP scaffolding, login/auth setup, and basic layout.',
    },
  ],
};

export default APP_INFO;
