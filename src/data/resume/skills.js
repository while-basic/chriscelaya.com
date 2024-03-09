const skills = [
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'CSS',
    competency: 2,
    category: ['Web Development', 'Languages', 'CSS'],
  },
  {
    title: 'HTML',
    competency: 2,
    category: ['Web Development', 'Languages', 'HTML'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Shadcn/UI',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Flask',
    competency: 1,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Tensorflow',
    competency: 1,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 1,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Ruby',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Ruby on Rails',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Vercel',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Netlify',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'ChatGPT',
    competency: 5,
    category: ['LLM', 'Tools', 'AI'],
  },
  {
    title: 'Llama2',
    competency: 4,
    category: ['LLM', 'Tools', 'AI'],
  },
  {
    title: 'Mistral',
    competency: 4,
    category: ['LLM', 'Tools', 'AI'],
  },
  {
    title: 'Mixtral',
    competency: 4,
    category: ['LLM', 'Tools', 'AI'],
  },
  {
    title: 'Deep Seek Coder',
    competency: 4,
    category: ['LLM', 'Tools', 'AI'],
  },
  {
    title: 'Blender',
    competency: 3,
    category: ['Software', '3D'],
  },
  {
    title: 'Unity',
    competency: 3,
    category: ['Software', 'Game Development'],
  },
  {
    title: 'Unreal Engine',
    competency: 4,
    category: ['Software', 'Game Development'],
  },
  {
    title: 'Visual Studio Code',
    competency: 4,
    category: ['Software', 'Tools'],
  },
  {
    title: 'X Code',
    competency: 2,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Augmented Reality',
    competency: 4,
    category: ['Technology', 'Tools'],
  },
  {
    title: 'Virtual Reality',
    competency: 2,
    category: ['Technology', 'Tools'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages', 'Game Development', 'Unity'],
  },
  {
    title: 'Prompt Engineering',
    competency: 3,
    category: ['Languages', 'Artificial Intelligence', 'Prompt Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
