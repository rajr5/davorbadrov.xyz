import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  ToptalIcon,
  MailIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/me_3_smaller.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Davor Badrov</title>
        <meta name="description" content="Davor Badrov Full Stack Developer" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                priority
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Davor Badrov, a full stack software engineer
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a full stack engineer currently stationed in Zagreb,
                Croatia, I&apos;ve been working in the industry since 2014. My
                main stack is currently based around Elixir, usually paired with
                Phoenix and PostgreSQL, Absinthe if GraphQL is needed. I&apos;m
                also experienced with Javascript, using it both on frontend and
                backend, but lately I prefer using Typescript more and more
                which improves the developer experience for me and makes the
                codebase saner. I&apos;m open for freelancing so if you have a
                project
              </p>
              {/* <p>
                ... add more content? ...
              </p>
               */}
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/davorbadrov"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/davor-badrov-670b0312b"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://www.toptal.com/resume/davor-badrov"
                icon={ToptalIcon}
                className="mt-4"
              >
                Check on Toptal
              </SocialLink>

              <SocialLink
                href="mailto:davor@badrov.xyz"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Mail to davor@badrov.xyz
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
