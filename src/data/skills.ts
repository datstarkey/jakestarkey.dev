export interface SkillCategory {
  id: string
  title: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      'Svelte',
      'SvelteKit',
      'React',
      'Next.js',
      'TypeScript',
      'Angular',
      'Vue.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Sass',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: [
      'ASP.NET Core',
      'C#',
      'Node.js',
      'Express',
      '.NET Core',
      'REST APIs',
      'GraphQL',
      'Entity Framework',
      'MVC',
    ],
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    items: [
      'Kubernetes',
      'Docker',
      'Helm',
      'Kustomize',
      'GitOps',
      'ArgoCD',
      'Terraform',
      'Nginx',
      'Linux / Ubuntu',
      'AWS',
      'Azure',
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & Automation',
    items: [
      'GitHub Actions',
      'Jenkins',
      'TeamCity',
      'Octopus Deploy',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Rancher',
      'Agile / Scrum',
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite'],
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    items: ['Playwright', 'Vitest', 'Selenium', 'xUnit', 'NUnit', 'Jest', 'TDD', 'E2E Testing', 'Load Testing'],
  },
]
