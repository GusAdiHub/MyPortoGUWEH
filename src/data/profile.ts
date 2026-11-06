import type { Profile, Project, TechCategory, ExperienceItem } from './types';

export const profile: Profile = {
  name: 'Gus Adi',
  role: {
    id: 'Mahasiswa Informatika & Software Developer',
    en: 'Informatics Student & Software Developer',
  },
  headline: {
    id: 'Membangun aplikasi web, backend, dan sistem terapan yang terstruktur dan reliabel.',
    en: 'Building structured and reliable web applications, backends, and applied systems.',
  },
  bio: {
    id: [
      'Mahasiswa Informatika dengan ketertarikan mendalam pada rekayasa perangkat lunak, arsitektur backend, dan integrasi sistem.',
      'Fokus pada penulisan kode yang bersih, performan, serta pemecahan masalah teknis melalui perangkat lunak yang pragmatis.',
    ],
    en: [
      'Informatics student with a strong interest in software engineering, backend architecture, and system integration.',
      'Focused on writing clean, performant code and solving technical problems through pragmatic software design.',
    ],
  },
  currentlyExploring: {
    id: [
      'arsitektur web modern & astro',
      'pengembangan backend & rest api',
      'machine learning terapan & data processing',
    ],
    en: [
      'modern web architecture & astro',
      'backend engineering & rest apis',
      'applied machine learning & data processing',
    ],
  },
  githubUsername: 'GusAdiHub',
  email: 'gusplet123@gmail.com',
  linkedinUrl: null, // belum dikonfirmasi
  cvUrl: {
    id: null, // belum tersedia
    en: null,
  },
  availabilityStatus: {
    id: 'TERSEDIA UNTUK KOLABORASI & MAGANG',
    en: 'AVAILABLE FOR COLLABORATION & INTERNSHIP',
  },
};

export const projects: Project[] = [
  {
    slug: 'plagiarism-checker',
    title: 'Plagiarism Checker',
    featured: true,
    category: 'System / Text Processing',
    status: 'in-progress',
    summary: {
      id: 'Aplikasi pendeteksi kemiripan dokumen berbasis algoritma pemrosesan teks untuk mendeteksi indikasi plagiarisme.',
      en: 'Document similarity detection application based on text processing algorithms to detect plagiarism indications.',
    },
    problem: {
      id: 'Pemeriksaan orisinalitas dokumen teks manual membutuhkan waktu lama dan rentan terhadap ketidaktelitian perbandingan kata demi kata.',
      en: 'Manual verification of document originality is time-consuming and prone to inaccuracies in word-by-word comparison.',
    },
    solution: {
      id: 'Mengimplementasikan pipeline text preprocessing (tokenisasi, filtering, stemming) dan pencocokan kesamaan teks untuk menghasilkan skor kemiripan yang terukur.',
      en: 'Implemented a text preprocessing pipeline (tokenization, filtering, stemming) and text similarity matching to produce measurable similarity scores.',
    },
    role: {
      id: 'Developer utama — perancangan alur pemrosesan teks dan antarmuka pengujian.',
      en: 'Lead developer — text processing pipeline design and testing interface.',
    },
    techStack: ['Python', 'Text Mining', 'Algorithms', 'Web'],
    repoUrl: null, // TODO: konfirmasi URL repo dari pemilik
    demoUrl: null,
  },
  {
    slug: 'sakuku',
    title: 'SakuKu',
    featured: false,
    category: 'Application / Finance',
    status: 'in-progress',
    summary: {
      id: 'Aplikasi pencatatan dan pengelolaan keuangan personal yang dirancang untuk pelacakan transaksi harian secara cepat.',
      en: 'Personal financial tracking and management app designed for fast daily expense and income recording.',
    },
    problem: {
      id: 'Pengguna sering kesulitan melacak arus kas harian karena antarmuka pencatatan yang rumit dan lambat.',
      en: 'Users frequently struggle to track daily cash flows due to overly complex and slow logging interfaces.',
    },
    solution: {
      id: 'Menyediakan antarmuka pencatatan transaksi yang ringkas, kategorisasi pengeluaran, serta ringkasan saldo yang jelas.',
      en: 'Provides a streamlined transaction entry interface, expense categorization, and clear balance summaries.',
    },
    role: {
      id: 'Developer — perancangan data flow transaksi dan implementasi UI.',
      en: 'Developer — transaction data flow design and UI implementation.',
    },
    techStack: ['Mobile / Web', 'Database', 'TypeScript'],
    repoUrl: null, // TODO: konfirmasi URL repo dari pemilik
    demoUrl: null,
  },
];

export const techCategories: TechCategory[] = [
  {
    key: 'languages',
    title: { id: 'Languages', en: 'Languages' },
    items: [
      { name: 'TypeScript', level: 'core' },
      { name: 'JavaScript', level: 'core' },
      { name: 'Python', level: 'core' },
      { name: 'SQL', level: 'exploring' },
    ],
  },
  {
    key: 'frontend',
    title: { id: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'Astro', level: 'core' },
      { name: 'HTML5 & CSS3', level: 'core' },
      { name: 'Tailwind CSS', level: 'core' },
    ],
  },
  {
    key: 'backend',
    title: { id: 'Backend & Processing', en: 'Backend & Processing' },
    items: [
      { name: 'Node.js', level: 'core' },
      { name: 'REST API', level: 'exploring' },
      { name: 'Text Mining / NLP', level: 'exploring' },
    ],
  },
  {
    key: 'database',
    title: { id: 'Database', en: 'Database' },
    items: [
      { name: 'Relational DB (SQL)', level: 'exploring' },
      { name: 'Local Storage / JSON', level: 'core' },
    ],
  },
  {
    key: 'tools',
    title: { id: 'Tools & Environment', en: 'Tools & Environment' },
    items: [
      { name: 'Git & GitHub', level: 'core' },
      { name: 'VS Code', level: 'core' },
      { name: 'Vercel', level: 'core' },
      { name: 'Linux / CLI', level: 'exploring' },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: 'PRESENT',
    type: 'EDUCATION',
    role: {
      id: 'Mahasiswa S1 Informatika',
      en: 'Undergraduate Informatics Student',
    },
    institution: 'Indonesia',
    description: {
      id: 'Fokus pada rekayasa perangkat lunak, algoritma pemrosesan teks, serta pengembangan aplikasi web dan sistem terapan.',
      en: 'Focusing on software engineering, text processing algorithms, and web/applied system development.',
    },
  },
];
