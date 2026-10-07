// All portfolio content lives here. Edit links and text in this file only.
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/vani-durgam13',
  // Profile URL derived from your repository owner name (Durgamvani-184). Change if different.
  github: 'https://github.com/Durgamvani-184',
  email: 'vanidurgam13@gmail.com',
  phone: '+91 8125658875',
  resume: '/assets/Vani_Resume.pdf',
};

export const NAV = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact'];

export const SNAPSHOT = [['B.Tech CSE-AIML', 'GPA 8.78'], ['AI + Full-Stack', 'Featured Projects'], ['Data Engineering', '2026 Internship'], ['Software Engineering', 'Career Focus']];

export const SKILLS = [
  { title: 'Programming languages', items: ['Java', 'JavaScript', 'Python'] },
  { title: 'Core concepts', items: ['Data Structures', 'Algorithms', 'OOPS', 'DBMS'] },
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { title: 'Backend', items: ['Flask', 'Django', 'REST APIs'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  { title: 'Cloud', items: ['AWS Cloud Foundations'] },
];

export const EXPERIENCE = {
  role: 'Data Engineering Virtual Internship',
  org: 'AICTE EduSkills (AWS Academy)',
  period: '2026',
  points: [
    'Gained hands-on experience in building ETL pipelines and data processing workflows.',
    'Worked with AWS data services and learned cloud-based data engineering fundamentals.',
  ],
};

// To add more detail later, fill the `extra` string of a project; it appears in the details panel only when not empty.
export const PROJECTS = [
  {
    id: 'proctor',
    name: 'AI Exam Proctoring System',
    summary: 'A real-time computer vision system that detects faces, tracks gaze and flags mobile-device usage during exams, with a Flask dashboard for live monitoring.',
    tags: ['YOLOv4-tiny', 'MediaPipe', 'Flask', 'Computer Vision'],
    chips: ['Live Video Streaming', 'Event Logging', 'Automated Alerts', 'Flask Dashboard'],
    visual: 'vision',
    features: ['Real-time face detection', 'Gaze tracking', 'Mobile-device usage detection', 'Flask dashboard with live video streaming', 'Event logging', 'Automated malpractice alerts'],
    problem: 'Detecting malpractice during exams.',
    solution: 'A computer vision pipeline built on YOLOv4-tiny and MediaPipe that watches the video feed, paired with a web dashboard that logs events and raises alerts.',
    contribution: ['Built the real-time computer vision system using YOLOv4-tiny and MediaPipe.', 'Developed the Flask-based web dashboard with live video streaming, event logging and automated alerts.'],
    repo: 'https://github.com/Durgamvani-184/ai_exam_proctor.git',
    extra: '',
  },
  {
    id: 'music',
    name: 'Emotion-Based Music Player',
    summary: 'An AI-powered music recommendation system that uses facial emotion recognition and speech sentiment analysis to suggest songs for the listener\u2019s emotional state.',
    tags: ['Facial Emotion Recognition', 'Speech Sentiment Analysis', 'AI Recommendation'],
    chips: ['Dynamic Recommendations', 'User-Friendly Interface'],
    visual: 'music',
    features: ['Facial emotion recognition', 'Speech sentiment analysis', 'AI-powered music recommendation', 'Dynamic song recommendations', 'User-friendly interface'],
    problem: 'Choosing music that fits how the listener feels.',
    solution: 'The system detects the user\u2019s emotional state from facial expressions and speech sentiment, then recommends songs dynamically.',
    contribution: ['Built the AI-powered recommendation system using facial emotion recognition and speech sentiment analysis.', 'Designed a user-friendly interface that recommends songs based on the detected emotional state.'],
    repo: 'https://github.com/Durgamvani-184/Emotion_Based_MusicPlayer.git',
    extra: '',
  },
];

export const EDUCATION = [
  { school: 'Malla Reddy University', place: 'Hyderabad, India', degree: 'Bachelor of Technology CSE-AIML', score: 'GPA: 8.78', period: 'August 2023 \u2013 Present', current: true },
  { school: 'Sree Chaitanya Junior College', place: 'Hyderabad, India', degree: 'Intermediate MPC', score: '93.6%', period: 'June 2021 \u2013 March 2023' },
  { school: 'Vaagdevi High School', place: 'Vemulawada, India', degree: 'Secondary School Certificate', score: 'GPA: 10.0', period: 'June 2020 \u2013 May 2021' },
];

export const CERTIFICATIONS = [
  { name: 'Java Programming Fundamentals', issuer: 'Infosys Springboard Certificate' },
  { name: 'AWS Academy Graduate', issuer: 'Cloud Foundations Badge' },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Badge' },
];
