import Head from 'next/head'
import Image from 'next/image'
import clsx from 'clsx'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import elixirLogo from '@/images/logos/tech/elixir_logo.png'
import nodejsLogo from '@/images/logos/tech/nodejs_logo.png'
import reactLogo from '@/images/logos/tech/react_logo.png'
import javascriptLogo from '@/images/logos/tech/javascript_logo.png'
import typescriptLogo from '@/images/logos/tech/typescript_logo.png'
import postgresqlLogo from '@/images/logos/tech/postgresql_logo.png'

const techUsed = [
  {
    name: 'Elixir',
    description:
      'A functional language ideal for scalable and maintainable applications with high concurrency and low latency needs.',
    link: { href: 'https://elixir-lang.org/', label: 'elixir-lang.org' },
    logo: {
      image: elixirLogo,
      className: 'w-[48px] bg-white rounded-full',
    },
  },
  {
    name: 'NodeJS',
    description:
      'An open-source runtime environment executing JavaScript code outside the browser, often used for back-end development.',
    link: { href: 'https://nodejs.org', label: 'nodejs.org' },
    logo: {
      image: nodejsLogo,
      className: 'w-[36px] bg-transparent',
    },
  },
  {
    name: 'React',
    description:
      'A JavaScript library that simplifies the creation of user interfaces, known for its component-based structure and efficient rendering.',
    link: { href: 'https://react.dev/', label: 'react.dev' },
    logo: {
      image: reactLogo,
      className: 'w-[36px] bg-transparent',
    },
  },
  {
    name: 'Javascript',
    description:
      "A high-level language that makes web pages interactive, it's a key part of the web along with HTML and CSS.",
    link: {
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      label: 'mozilla.org/.../JavaScript',
    },
    logo: {
      image: javascriptLogo,
      className: 'h-[48px] w-[48px] rounded-sm',
    },
  },
  {
    name: 'Typescript',
    description:
      'A robust superset of JavaScript, facilitating error detection and large code base management through strong typing.',
    link: {
      href: 'https://www.typescriptlang.org/',
      label: 'typescriptlang.org',
    },
    logo: {
      image: typescriptLogo,
      className: 'h-[48px] w-[48px] ',
    },
  },
  {
    name: 'PostgreSQL',
    description:
      'A powerful, open-source object-relational database system, noted for its advanced features and scalability.',
    link: { href: 'https://www.postgresql.org/', label: 'postgresql.org' },
    logo: {
      image: postgresqlLogo,
      className: 'w-[32px] relative top-[2px]',
    },
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Tech Used - Davor Badrov</title>
        <meta
          name="description"
          content="My tech stack, the technologies I use to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="My tech stack, the technologies I use to put my dent in the universe."
        intro="I've worked on a number of projects and have worked with a bunch of different technologies, below are some of the ones that I love using to solve problems."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {techUsed.map((tech) => (
            <Card as="li" key={tech.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={tech.logo.image}
                  alt=""
                  className={clsx(tech.logo.className, 'object-cover')}
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={tech.link.href}>{tech.name}</Card.Link>
              </h2>
              <Card.Description>{tech.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{tech.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <div className="mt-[64px] text-zinc-800 dark:text-zinc-100 sm:mt-[96px]">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            All tech listed
          </h2>
          <h2 className="mb-12 text-base">
            There&apos;s so much tech a developer faces nowadays to list so I&apos;ll just
            list some of what I worked with below.
          </h2>

          <h3 className="mb-4 text-2xl font-bold sm:text-2xl">Languages</h3>
          <ul>
            {languages.map((i) => (
              <li key={i} className="text-lg">
                {i}
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-6 text-2xl font-bold sm:text-2xl">
            Frameworks
          </h3>
          <ul>
            {frameworks.map((i) => (
              <li key={i} className="text-lg">
                {i}
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-6 text-2xl font-bold sm:text-2xl">
            Environments
          </h3>
          <ul>
            {environments.map((i) => (
              <li key={i} className="text-lg">
                {i}
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-6 text-2xl font-bold sm:text-2xl">
            Platforms
          </h3>
          <ul>
            {platforms.map((i) => (
              <li key={i} className="text-lg">
                {i}
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-6 text-2xl font-bold sm:text-2xl">
            Storage systems
          </h3>
          <ul>
            {storage.map((i) => (
              <li key={i} className="text-lg">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </SimpleLayout>
    </>
  )
}

const languages = [
  'JavaScript',
  'Elixir',
  'TypeScript',
  'NodeJS',
  'SQL',
  'CSS',
  'HTML',
]
const frameworks = [
  'Phoenix',
  'Ecto',
  'Express.js',
  'Koa',
  'React',
  'React Native',
  'Next.js',
  'Angular 1.x',
  'Tailwind CSS',
]

const environments = [
  'Single Page Applications (SPA)',
  'Monolith Systems',
  'Microservices',
  'Responsive Design',
]

const platforms = [
  'Linux',
  'Amazon Web Services (AWS)',
  'Azure',
  'Docker',
  'Kubernetes',
]

const storage = [
  'PostgreSQL',
  'MySQL',
  'Microsoft SQL Server',
  'Redis',
  'MongoDB',
  'Elasticsearch',
]
