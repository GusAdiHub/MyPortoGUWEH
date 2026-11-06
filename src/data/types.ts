export type Locale = 'id' | 'en';

export interface Profile {
  name: string;
  role: {
    id: string;
    en: string;
  };
  headline: {
    id: string;
    en: string;
  };
  bio: {
    id: string[];
    en: string[];
  };
  currentlyExploring: {
    id: string[];
    en: string[];
  };
  githubUsername: string;
  email: string;
  linkedinUrl: string | null;
  cvUrl: {
    id: string | null;
    en: string | null;
  };
  availabilityStatus: {
    id: string;
    en: string;
  };
}

export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface Project {
  slug: string;
  title: string;
  featured: boolean;
  category: string;
  status: ProjectStatus;
  summary: {
    id: string;
    en: string;
  };
  problem?: {
    id: string;
    en: string;
  };
  solution?: {
    id: string;
    en: string;
  };
  role?: {
    id: string;
    en: string;
  };
  techStack: string[];
  repoUrl: string | null; // null if private/wip
  demoUrl: string | null; // null if not live
  image?: string;
}

export interface TechItem {
  name: string;
  level: 'core' | 'exploring';
}

export interface TechCategory {
  key: 'languages' | 'frontend' | 'backend' | 'database' | 'tools';
  title: {
    id: string;
    en: string;
  };
  items: TechItem[];
}

export interface ExperienceItem {
  period: string;
  type: 'EDUCATION' | 'EXPERIENCE' | 'ORGANIZATION';
  role: {
    id: string;
    en: string;
  };
  institution: string;
  description: {
    id: string;
    en: string;
  };
}
