/**
 * @copyright 2024
 * @license Apache-2.0
 */

import { MenuItem } from '@/types';

// Lucide Icons
import {
  Building2,
  BookOpen,
  ClipboardList,
  Library,
  GraduationCap,
  School,
  Medal,
  Users2,
  Landmark,
  Presentation,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  CreditCard,
} from 'lucide-react';

import {
  feature1,
  feature2,
  blog1,
  blog2,
  blog3,
  avatar1,
  avatar2,
  avatar3,
} from '@/assets';

// Header Menu
export const navMenu: MenuItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/admission', label: 'Admission' },
  {
    href: '/academics',
    label: 'Academics',
    submenu: [
      { href: '/academics/courses', icon: <BookOpen />, label: 'Courses Offered', desc: 'Explore UG & PG courses in tech and sciences.' },
      { href: '/academics/departments', icon: <Library />, label: 'Departments', desc: 'All departments under one roof.' },
      { href: '/academics/syllabus', icon: <ClipboardList />, label: 'Syllabus & Curriculum', desc: 'Get the latest academic structure.' },
      { href: '/academics/faculty', icon: <Users2 />, label: 'Faculty', desc: 'Meet our experienced educators.' },
    ],
  },
  {
    href: '/facilities',
    label: 'Facilities',
    submenu: [
      { href: '/facilities/library', icon: <Library />, label: 'Library', desc: 'Explore thousands of academic resources.' },
      { href: '/facilities/labs', icon: <GraduationCap />, label: 'Labs & Equipment', desc: 'State-of-the-art lab setups.' },
      { href: '/facilities/hostel', icon: <Building2 />, label: 'Hostel', desc: 'Safe & spacious hostel life.' },
      { href: '/facilities/sports', icon: <Medal />, label: 'Sports', desc: 'Campus sports and activities.' },
    ],
  },
  { href: '/iqac', label: 'IQAC' },
  { href: '/nirf', label: 'NIRF' },
  { href: '/placements', label: 'Placements' },
  {
    href: '/others',
    label: 'Others',
    submenu: [
      { href: '/others/events', icon: <Presentation />, label: 'Events', desc: 'Annual day, tech fests, cultural events, etc.' },
      { href: '/others/committees', icon: <Landmark />, label: 'Committees', desc: 'Anti-ragging, Women’s Cell, NSS, etc.' },
    ],
  },
  { href: '/contact', label: 'Contact' },
];

// Hero
export const heroData = {
  sectionSubtitle: 'Empowering Education',
  sectionTitle: 'Welcome to Our College',
  decoTitle: 'education',
  sectionText:
    'Discover an institution that nurtures talent, builds future leaders, and fosters innovation in every student.',
};

// Features
export const featureData = {
  sectionSubtitle: 'Why Choose Us',
  sectionTitle: 'Our Core Strengths',
  sectionText:
    'We offer a holistic education experience combining academics, co-curriculars, and life skills to shape future leaders.',
  features: [
    {
      icon: <School size={32} />,
      iconBoxColor: 'bg-blue-600',
      title: 'Accredited Programs',
      desc: 'Recognized and accredited by top education bodies.',
      imgSrc: feature1,
    },
    {
      icon: <Users2 size={32} />,
      iconBoxColor: 'bg-green-500',
      title: 'Experienced Faculty',
      desc: 'A passionate and skilled faculty guiding student success.',
      imgSrc: feature2,
    },
    {
      icon: <Building2 size={32} />,
      iconBoxColor: 'bg-yellow-500',
      title: 'Modern Campus',
      desc: 'Fully equipped labs, library, hostel, and sports facilities.',
    },
    {
      icon: <GraduationCap size={32} />,
      iconBoxColor: 'bg-purple-500',
      title: 'Excellent Placements',
      desc: 'Strong industry connections with impressive placement records.',
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: 'Admissions Process',
  sectionTitle: 'Steps to Join Our College',
  sectionText:
    'Follow these simple steps to begin your educational journey with us.',
  list: [
    {
      icon: <ClipboardList size={32} />,
      title: 'Fill Application Form',
      text: 'Apply online with accurate details and academic documents.',
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Entrance / Merit Review',
      text: 'Screening through entrance exams or merit-based selection.',
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Pay Fees & Join',
      text: 'Secure your admission by paying the fee and submitting documents.',
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: 'College Snapshot',
  sectionTitle: 'Quick Stats',
  sectionText:
    'Here’s a glimpse into our achievements and impact.',
  listTitle: 'What makes us stand out',
  list: [
    {
      title: '25+',
      text: 'Years of Excellence',
    },
    {
      title: '100+',
      text: 'Faculty Members',
    },
    {
      title: '10K+',
      text: 'Graduates Worldwide',
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: 'Student Reviews',
  sectionTitle: 'What Students Say',
  reviewCard: [
    {
      title: 'A life-changing experience!',
      text: 'This college gave me the platform to grow academically and professionally.',
      reviewAuthor: 'Anjali Sharma',
      date: '2 months ago',
    },
    {
      title: 'Great campus and faculty',
      text: 'Modern infrastructure and an encouraging faculty made my journey smooth.',
      reviewAuthor: 'Rahul Verma',
      date: '3 months ago',
    },
    {
      title: 'Excellent placement support',
      text: 'Thanks to our placement cell, I got into a top MNC straight out of college.',
      reviewAuthor: 'Sneha Patel',
      date: '1 month ago',
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: 'Our Blog',
  sectionTitle: 'Latest from Campus',
  sectionText:
    'Stay updated with college events, academic tips, and success stories.',
  blogs: [
    {
      imgSrc: blog1,
      badge: 'Academics',
      title: '5 Tips to Ace Semester Exams',
      author: {
        avatarSrc: avatar1,
        authorName: 'Prof. Meena Sharma',
        publishDate: 'Apr 10, 2024',
        readingTime: '6 min read',
      },
    },
    {
      imgSrc: blog2,
      badge: 'Placements',
      title: 'Top Companies Hiring Our Graduates',
      author: {
        avatarSrc: avatar2,
        authorName: 'Training & Placement Cell',
        publishDate: 'Mar 25, 2024',
        readingTime: '4 min read',
      },
    },
    {
      imgSrc: blog3,
      badge: 'Events',
      title: 'Annual TechFest 2024 Highlights',
      author: {
        avatarSrc: avatar3,
        authorName: 'Event Committee',
        publishDate: 'Feb 12, 2024',
        readingTime: '3 min read',
      },
    },
  ],
};

// CTA
export const ctaData = {
  text: 'Join Our College Today and Shape Your Future!',
};

// Footer
export const footerData = {
  links: [
    {
      title: 'Academics',
      items: [
        { href: '#', label: 'Departments' },
        { href: '#', label: 'Courses' },
        { href: '#', label: 'Syllabus' },
        { href: '#', label: 'Examinations' },
      ],
    },
    {
      title: 'Facilities',
      items: [
        { href: '#', label: 'Library' },
        { href: '#', label: 'Hostels' },
        { href: '#', label: 'Labs' },
        { href: '#', label: 'Cafeteria' },
      ],
    },
    {
      title: 'Useful Links',
      items: [
        { href: '#', label: 'Placements' },
        { href: '#', label: 'IQAC' },
        { href: '#', label: 'NIRF' },
        { href: '#', label: 'Contact' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { href: '#', label: 'Terms & Conditions' },
        { href: '#', label: 'Privacy Policy' },
      ],
    },
  ],
  copyright: '© 2024 Your College Name',
  socialLinks: [
    { href: 'https://x.com/yourcollege', icon: <TwitterIcon size={18} /> },
    { href: 'https://github.com/yourcollege', icon: <GithubIcon size={18} /> },
    { href: 'https://linkedin.com/school/yourcollege', icon: <LinkedinIcon size={18} /> },
    { href: 'https://instagram.com/yourcollege', icon: <InstagramIcon size={18} /> },
    { href: 'https://youtube.com/yourcollege', icon: <YoutubeIcon size={18} /> },
  ],
};
