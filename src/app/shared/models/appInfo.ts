export interface AppInfo {
  title: string;
  tagline: string;
  description: string;
  createdAt: string;
  createdBy: {
    name: string;
    codingTag: string;
    email: string;
    website: string;
  };
  contributors: {
    name: string;
    email?: string;
    githubUrl?: string;
    role?: string;
  }[];
  version: string;
  status: 'alpha' | 'beta' | 'production' | 'archived';
  tags?: string[];
  lastUpdated: string;
  repoUrl?: string;
  deployedUrl?: string;
  license?: string;
  techStack?: string[];
  changelog?: {
    date: string;
    summary: string;
  }[];
}
