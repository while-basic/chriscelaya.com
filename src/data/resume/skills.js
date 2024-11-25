const skills = [
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Frontend'],
  },
  {
    title: 'Node.js',
    competency: 4,
    category: ['Web Development', 'Backend', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Frontend', 'Javascript'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python', 'Scripting'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages', 'Audio Development'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'Data Structures',
    competency: 3,
    category: ['Computer Science'],
  },
  {
    title: 'Software Engineering',
    competency: 3,
    category: ['Computer Science'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development', 'Frontend'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Git/Version Control',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Audio DSP',
    competency: 3,
    category: ['Audio Development'],
  },
  {
    title: 'JUCE Framework',
    competency: 3,
    category: ['Audio Development', 'C++'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases', 'Backend'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Databases', 'Backend'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Critical Infrastructure',
    competency: 4,
    category: ['Data Centers', 'Infrastructure'],
  },
  {
    title: 'System Administration',
    competency: 4,
    category: ['Data Centers', 'Infrastructure'],
  },
  {
    title: 'CMMS',
    competency: 4,
    category: ['Data Centers', 'Infrastructure'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3', // Frontend
  '#37b1f5', // Backend
  '#40494e', // Languages
  '#515dd4', // Web Development
  '#e47272', // Tools
  '#cc7b94', // Databases
  '#3896e2', // Computer Science
  '#c3423f', // Audio Development
  '#d75858', // Cloud
  '#747fff', // Data Centers
  '#64cb7b', // Infrastructure
  '#9B59B6', // Javascript
  '#2ECC71', // Python
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
