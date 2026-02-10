export interface Profile {
  name: string;
  title: string;
  experience: string;
  currentRole: string;
  organization: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  summary: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  modules?: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  category: string;
  image?: string;
  duration?: string;
  role?: string;
  impact?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  percentage?: string;
  cgpa?: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential?: string;
  logo?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
