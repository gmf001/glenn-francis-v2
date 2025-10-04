import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Project from '@/components/project';
import Tech from '@/components/tech';
import Certificate from '@/components/certificate';

export default function Page() {
	return (
		<div className='min-h-screen bg-background'>
			<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<div className='container mx-auto flex h-14 items-center px-3 md:px-6'>
					<div className='mr-6 flex items-center space-x-2'>
						<span className='hidden font-bold sm:inline-block'>
							glennfrancis.dev
						</span>
						<span className='font-bold text-base sm:hidden'>GF.DEV</span>
					</div>

					<div className='ml-auto'>
						<Button variant='outline'>Resume</Button>
					</div>
				</div>
			</header>

			<main className='container mx-auto px-4 md:px-6'>
				<section
					id='about'
					className='py-16 md:py-24 lg:py-32 lg:min-h-[50vh] flex items-center'>
					<div className='container px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
									Full Stack Developer
								</h1>
								<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
									Building digital experiences with modern technologies. Focused
									on creating elegant solutions to complex problems.
								</p>
							</div>
							<div className='space-x-4 flex items-center'>
								<Link href='https://github.com/gmf001' target='_blank'>
									<div className='border p-4 rounded-lg'>
										<Github className='h-5 w-5 lg:h-6 lg:w-6' />
										<span className='sr-only'>GitHub</span>
									</div>
								</Link>
								<Link
									href='https://www.linkedin.com/in/glenn-francis/'
									target='_blank'>
									<div className='border p-4 rounded-lg'>
										<Linkedin className='h-5 w-5 lg:h-6 lg:w-6' />
										<span className='sr-only'>LinkedIn</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* projects */}
				<section id='projects' className='py-12 md:py-24'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 md:mb-12 text-center'>
							Projects
						</h2>
						<div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3 w-full'>
							<Project
								title='Notes'
								description='A simple note taking app'
								image='/screenshot1.png'
								link='https://github.com/gmf001/notes-app-mern'
								tags={['node', 'express', 'mongodb', 'react', 'tailwindcss']}
							/>
							<Project
								title='Threadly'
								description='A social media app (threads clone)'
								image='https://placehold.co/600x400'
								link=''
								tags={['next', 'prisma', 'postgres', 'tailwindcss', 'auth']}
							/>
							<Project
								title='AnonBox'
								description='Anonymous message board (ngl.link clone)'
								image='https://placehold.co/600x400'
								link=''
								tags={['nuxt', 'prisma', 'postgres', 'tailwindcss', 'auth']}
							/>
							<Project
								title='Linkly'
								description='A link management tool (linktree clone)'
								image='https://placehold.co/600x400'
								link=''
								tags={['react', '.NET', 'tailwindcss', 'auth']}
							/>
							<Project
								title='SaveIt'
								description='A bookmark management tool'
								image='/screenshot2.png'
								link=''
								tags={['vue', 'go', 'mongodb', 'tailwindcss', 'auth']}
							/>
							<Project
								title='Votely'
								description='A poll creation tool (strawpoll clone)'
								image='https://placehold.co/600x400'
								link=''
								tags={['django', 'postgres', 'auth']}
							/>
						</div>
					</div>
				</section>

				{/* certificates */}
				<section className='py-12 md:py-24'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 md:mb-12 text-center'>
							Certifications
						</h2>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							<Certificate
								title='HashiCorp Certified: Terraform Associate'
								date='Issued: March 27, 2023'
								link='https://www.credly.com/badges/d27caa93-73c7-45d2-b87a-b1d3ccf78642/public_url'
							/>
							<Certificate
								title='Microsoft Certified: Azure Fundamentals'
								date='Issued: February 23, 2023'
								link='https://www.credly.com/badges/f6317c22-5a87-4baf-9823-d01d11c411fe/public_url'
							/>
							<Certificate
								title='AWS Certified Cloud Practitioner'
								date='Issued: January 20, 2023'
								link='https://www.credly.com/badges/b2375ca4-d464-41c6-b7e9-57f7834cb605/public_url'
							/>
							<Certificate
								title='Google Cloud Digital Leader'
								date='Issued: July 22, 2021'
								link='https://www.credential.net/6bbc8f00-5bc3-4df8-bd66-45eeff071192#acc.Oouk4ap9'
							/>
							<Certificate
								title='Google Cloud Professional Developer'
								date='Issued: August 5, 2021'
								link='https://www.credential.net/13179881-bbf2-4d7e-ad6c-7078ab170f5d#acc.vgMfyCw7'
							/>
						</div>
					</div>
				</section>

				{/* tech stack */}
				<section className='py-12 md:py-24'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 md:mb-12 text-center'>
							Tech Stack
						</h2>
						<Tech />
					</div>
				</section>
			</main>

			<footer className='border-t mt-4 lg:mt-8 xl:mt-12'>
				<div className='container mx-auto flex flex-col justify-center gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6'>
					<p className='text-xs text-gray-500 text-center dark:text-gray-400'>
						© 2025 glennfrancis.dev
					</p>
				</div>
			</footer>
		</div>
	);
}
