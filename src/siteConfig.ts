/**
 * ============================================================
 *  SITE CONFIGURATION — single source of truth for personal data.
 *  Edit this file to customize the portfolio. See guide.md for details.
 * ============================================================
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email' | 'website';
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export const siteConfig = {
  // ---- Site Metadata ----
  site: {
    url: 'https://your-domain.com',
    title: 'Portfolio',
    description: 'Portfolio showcasing my projects',
  },

  // ---- Hero / Home page ----
  hero: {
    name: 'Your Name',
    tagline: 'Building things that make a difference.',
    subtitle: 'Developer passionate about clean code, thoughtful design, and solving real problems.',
  },

  // ---- About page ----
  about: {
    bio: `Hello! I'm a developer who enjoys building useful tools and applications.
Replace this paragraph with your own bio — your background, what drives you,
and what you're looking for.`,
    skills: [
      {
        title: 'Languages',
        items: ['JavaScript / TypeScript', 'Python', 'HTML / CSS'],
      },
      {
        title: 'Frameworks',
        items: ['React', 'Astro', 'FastAPI'],
      },
      {
        title: 'Tools',
        items: ['Git', 'Docker', 'PostgreSQL'],
      },
    ] as SkillCategory[],
  },

  // ---- Contact page ----
  contact: {
    intro: 'Have a question or want to work together? Send me a message.',
    // Replace with your real Formspree endpoint (see guide.md)
    formspreeId: 'YOUR_FORM_ID',
  },

  // ---- Social links (shown in footer) ----
  social: [
    { label: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  ] as SocialLink[],

  // ---- Navigation links ----
  nav: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
};
