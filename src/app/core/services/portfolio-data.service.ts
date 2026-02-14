import { Injectable } from '@angular/core';
import { Profile, SkillCategory, Experience, Project, Education, Certification } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getProfile(): Profile {
    return {
      name: 'Hrishikesh Bodke',
      title: '.NET + Angular Full-Stack Developer',
      experience: '3.4+ Years',
      currentRole: 'Project Engineer',
      organization: 'CDAC Pune',
      location: 'Ministry of Electronics and Information Technology, Government of India',
      email: 'hrishikeshbodkeb@gmail.com',
      linkedin: 'http://www.linkedin.com/in/hbodke-ab765a158',
      github: 'https://github.com/hrishikeshbodke',
      summary: 'Experienced Full-Stack Developer specializing in building secure, scalable enterprise applications. Proven expertise in .NET Core, .NET Framework, Angular, and SQL Server with a strong focus on security, performance optimization, and GIS integration. Successfully delivered critical modules for national-level infrastructure monitoring systems serving multiple state governments.',
    };
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        name: 'Backend Development',
        icon: '🔧',
        skills: [
          { name: 'C# & .NET Core', level: 100, category: 'Backend' },
          { name: 'ASP.NET MVC', level: 100, category: 'Backend' },
          { name: 'Web API', level: 100, category: 'Backend' },
          { name: 'Entity Framework', level: 100, category: 'Backend' },
          { name: 'LINQ', level: 100, category: 'Backend' },
        ]
      },
      {
        name: 'Frontend Development',
        icon: '🎨',
        skills: [
          { name: 'Angular', level: 100, category: 'Frontend' },
          // { name: 'TypeScript', level: 100, category: 'Frontend' },
          { name: 'JavaScript', level: 100, category: 'Frontend' },
          { name: 'HTML5 & CSS3', level: 100, category: 'Frontend' },
          { name: 'jQuery & AJAX', level: 100, category: 'Frontend' },
          { name: 'Responsive Design', level: 100, category: 'Frontend' },
        ]
      },
      {
        name: 'Database & Reporting',
        icon: '🗄️',
        skills: [
          { name: 'SQL Server', level: 100, category: 'Database' },
          { name: 'Stored Procedures', level: 100, category: 'Database' },
          // { name: 'Database Triggers', level: 100, category: 'Database' },
          { name: 'SSRS Reporting Services', level: 100, category: 'Database' },
        ]
      },
      {
        name: 'Security & Quality',
        icon: '🔒',
        skills: [
          { name: 'AES + RSA Encryption', level: 100, category: 'Security' },
          { name: 'Digital Signature', level: 100, category: 'Security' },
          { name: 'JWT Authentication', level: 100, category: 'Security' },
          { name: 'SonarQube', level: 100, category: 'Security' },
        ]
      },
      {
        name: 'GIS & Visualization',
        icon: '🗺️',
        skills: [
          { name: 'OpenLayers', level: 100, category: 'GIS' },
          { name: 'WMS Layers', level: 100, category: 'GIS' },
          { name: 'KML & Maps', level: 100, category: 'GIS' },
          { name: 'Highcharts.js', level: 100, category: 'GIS' },
          // { name: 'jqGrid', level: 100, category: 'GIS' },
        ]
      },
      {
        name: 'DevOps & Tools',
        icon: '⚙️',
        skills: [
          { name: 'Git & GitHub', level: 100, category: 'DevOps' },
          { name: 'IIS Server', level: 100, category: 'DevOps' },
          { name: 'GitHub Copilot', level: 100, category: 'DevOps' },
          { name: 'Production Support (Deployments)', level: 100, category: 'DevOps' },
        ]
      }
    ];
  }

  getExperience(): Experience[] {
    return [
      {
        title: 'Project Engineer',
        company: 'CDAC Pune',
        location: 'Ministry of Electronics and Information Technology, Government of India',
        startDate: 'Nov 2022',
        endDate: 'Present',
        current: true,
        description: 'Leading development of critical modules for PMGSY-OMMAS, a national-level road infrastructure monitoring and accounting system serving multiple state governments across India.',
        modules: [
          'SNA Sparsh Integration',
          'SBD – GePNIC Integration',
          'EBG – NeSL Integration',
          'Ticketing System',
          'PVTG Integration'
        ],
        responsibilities: [
          'Developed secure, scalable backend modules using .NET Core & ASP.NET MVC for national-level government data',
          'Built and optimized REST APIs handling high-volume transactions across multiple state governments',
          'Designed complex SQL schemas with validations, stored procedures, and triggers for data integrity',
          'Implemented Angular-based UI workflows with complex business rules and state management',
          'Integrated OpenLayers GIS maps with custom WMS layers for spatial data visualization',
          'Implemented AES/RSA hybrid encryption and Digital Signature integration for secure communications',
          'Collaborated with NIC teams, state government officials, and external platform integrations',
          'Mentored junior developers on best practices, code reviews, and architectural decisions',
          'Conducted production deployments and provided L2/L3 support for critical issues'
        ],
        technologies: [
          '.NET Core', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'Angular',
          'SQL Server', 'OpenLayers', 'jQuery', 'IIS', 'Git', 'SonarQube'
        ]
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 'pmgsy-ommas',
        title: 'PMGSY – OMMAS',
        subtitle: 'Online Management, Monitoring & Accounting System',
        description: 'Large-scale national web application for monitoring and accounting of rural road infrastructure under the Pradhan Mantri Gram Sadak Yojana (Prime Minister\'s Rural Roads Programme). The system manages data for thousands of road projects across multiple states and UT.',
        features: [
          'SNA Sparsh Integration for financial accounting and fund management',
          'GePNIC Integration for secure bidding and procurement processes',
          'NeSL Integration for e-bank guarantee management',
          'Multi-level ticketing system for support and issue resolution',
          'PVTG Integration for unconnected habitations',
          'Interactive GIS maps with OpenLayers for road network visualization',
          'Role-based access control for state, district, and block level users',
          'Automated report generation with SSRS Reporting Services',
          'Real-time data synchronization across government portals'
        ],
        technologies: [
          '.NET Core', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'Angular',
          'SQL Server', 'OpenLayers', 'SSRS Reporting Services', 'jQuery', 'AJAX', 'Hybrid Encryption', 'JWT', 'Digital Signature', 'GIT', 'IIS', 'SonarQube','Leaflet.js','KML','WMS Layers','Copilot AI'
        ],
        category: 'Government - National Infrastructure',
        duration: 'Nov 2022 - Present',
        role: 'Full-Stack Developer',
        impact: 'Serving 30+ state and national government agencies, managing crores of rupees in rural road infrastructure funding'
      },
      {
        id: 'digital-health',
        title: 'Digital Health Ecosystem',
        subtitle: 'Patient-Centric Healthcare Delivery Platform',
        description: 'Web-based healthcare platform providing comprehensive patient management, appointment scheduling, and medical records management using secure REST APIs.',
        features: [
          'Patient registration and profile management',
          'Appointment scheduling with doctor availability',
          // 'Electronic Medical Records (EMR) integration',
          //'Prescription management and drug interaction alerts',
          // 'Lab reports and diagnostic integration',
          'Secure REST API architecture',
          // 'HIPAA-compliant data handling',
          'Role-based dashboards for patients, doctors, and administrators'
        ],
        technologies: [
          '.NET Core', 'Web API', 'Entity Framework', 'Angular', 'SQL Server', 'JWT', 'LINQ'
        ],
        category: 'Healthcare',
        duration: '8 months',
        role: 'Full-Stack Developer'
      },
      {
        id: 'college-blockchain',
        title: 'College Fee Transaction using Blockchain',
        subtitle: 'Secure Academic Payment System',
        description: 'Blockchain-based fee payment system for academic institutions ensuring transparency, security, and immutability of financial transactions using cryptographic hashing and public/private key infrastructure.',
        features: [
          'Blockchain-based transaction ledger',
          'Public/Private key cryptography for secure payments',
          'SHA-256 hashing for data integrity',
          'Immutable transaction history',
          'Student fee payment portal',
          'Admin dashboard for fee management',
          'Receipt generation and verification',
          'Audit trail and reporting'
        ],
        technologies: [
          'Java', 'Spring Boot','MySQL','Blockchain Concepts', 'SHA-256'
        ],
        category: 'Academic - Fintech',
        duration: '4 months',
        role: 'Developer'
      },
      {
        id: 'mobile-shop',
        title: 'Mobile Shop Inventory Management System',
        subtitle: 'CRUD-based Inventory Platform',
        description: 'Comprehensive inventory management system for mobile phone retail stores with features for stock tracking, sales management, and customer relationship management.',
        features: [
          'Product inventory management (CRUD operations)',
          'Stock level tracking and alerts',
          'Sales transaction processing',
          'Customer database management',
          'Supplier management',
          'Purchase order generation',
          'Sales reports and analytics',
          'Low stock notifications'
        ],
        technologies: [
          'Swing', 'JDBC', 'MySQL', 'Java'
        ],
        category: 'Academic',
        duration: '3 months',
        role: 'Developer'
      },
      {
        id: 'land-measurement',
        title: 'Land Measurement Tool',
        subtitle: 'JavaScript-based Area Calculator for Farmers',
        description: 'Web-based geospatial tool helping farmers calculate land area accurately using map coordinates. Supports multiple measurement units and polygon drawing for irregular land parcels.',
        features: [
          'Interactive map interface for land plotting',
          'Polygon drawing with multiple points',
          'Area calculation in multiple units (acres, hectares, sq.meters)',
          'Coordinate-based measurement',
          'PDF report generation',
          'Perimeter calculation',
          'Simple and intuitive UI for farmers'
        ],
        technologies: [
          'JavaScript', 'jQuery','HTML5', 'CSS3'
        ],
        category: 'Agriculture - GIS',
        duration: '2 days',
        role: 'Frontend Developer'
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        degree: 'PG Diploma in Advanced Computing (PG-DAC)',
        institution: 'CDAC / KnowIT Pune',
        location: 'Pune, Maharashtra',
        year: '2022',
        percentage: '77.4%',
        highlights: [
          'Specialized in Full-Stack Development',
          'Advanced training in .NET and Angular',
          'Database design and optimization',
          'Software engineering principles'
        ]
      },
      {
        degree: 'B.E. in Computer Engineering',
        institution: 'GES R.H. Sapat College of Engineering',
        location: 'Nashik, Maharashtra',
        year: '2021',
        cgpa: '7.4',
        highlights: [
          'Strong foundation in computer science fundamentals',
          'Data structures and algorithms',
          'Database management systems',
          'Web technologies and development'
        ]
      }
    ];
  }

  getCertifications(): Certification[] {
    return [
      {
        name: 'Full-Stack Development with .NET and Angular',
        issuer: 'CDAC',
        date: '2022'
      },
      {
        name: 'Government Digital Services Training',
        issuer: 'NIC - National Informatics Centre',
        date: '2023'
      },
      {
        name: 'Secure Coding Practices',
        issuer: 'CDAC Internal Training',
        date: '2023'
      }
    ];
  }

  getTechStack(): string[] {
    return [
      '.NET Core', 'C#', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'LINQ',
      'Angular',  'JavaScript', 'jQuery', 'HTML5', 'CSS3',
      'SQL Server', 'SSRS', 'Stored Procedures', 'Triggers',
      'OpenLayers', 'Highcharts.js', 'jqGrid',
      'Git', 'GitHub', 'IIS', 'SonarQube',
      'JWT', 'AES/RSA Encryption', 'Digital Signature',
      'REST API', 'AJAX', 'Razor Pages'
    ];
  }
}
