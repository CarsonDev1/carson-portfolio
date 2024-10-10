'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const projects = [
	{
		id: 1,
		title: 'E-commerce Platform',
		description:
			'A full-stack online shopping solution with advanced features like real-time inventory management, personalized recommendations, and seamless payment integration.',
		tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
		image: '/project-01.png',
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'Productivity tool with real-time updates, collaborative features, and intuitive UI for efficient task organization and team coordination.',
		tags: ['Vue.js', 'Firebase', 'Vuex'],
		image: '/project-01.png',
	},
	{
		id: 3,
		title: 'Portfolio Website',
		description:
			'Responsive showcase for creative professionals with dynamic content loading, smooth animations, and optimized performance.',
		tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
		image: '/project-01.png',
	},
];

const techSkills = [
	{ name: 'React', image: '/react.svg' },
	{ name: 'Next.js', image: '/nextjs.svg' },
	{ name: 'JavaScript', image: '/javascript.svg' },
	{ name: 'Typescript', image: '/typescript.svg' },
	{ name: 'Nodejs', image: '/nodejs.svg' },
	{ name: 'Express', image: '/express-js.svg' },
	{ name: 'Tailwind', image: '/tailwind.svg' },
	{ name: 'Material UI', image: '/material-ui.svg' },
	{ name: 'Ant Design', image: '/antd.svg' },
	{ name: 'HTML', image: '/html.svg' },
	{ name: 'CSS', image: '/css.svg' },
	{ name: 'SASS', image: '/sass.svg' },
	{ name: 'MongoDB', image: '/mongodb.svg' },
	{ name: 'Docker', image: '/docker.svg' },
	{ name: 'Postman', image: '/postman.svg' },
	{ name: 'Figma', image: '/figma.svg' },
];

const Star = ({ style }: { style: React.CSSProperties }) => (
	<motion.div
		className='absolute bg-white rounded-full'
		style={{
			width: Math.random() * 2 + 1,
			height: Math.random() * 2 + 1,
			...style,
		}}
		animate={{
			scale: [1, 1.2, 1],
			opacity: [0.7, 1, 0.7],
		}}
		transition={{
			duration: Math.random() * 2 + 1,
			repeat: Infinity,
			repeatType: 'reverse',
		}}
	/>
);

const UniverseBackground = () => {
	const stars = Array.from({ length: 100 }).map((_, i) => ({
		id: i,
		style: {
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
		},
	}));

	return (
		<div className='fixed inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black'>
			{stars.map((star) => (
				<Star key={star.id} style={star.style} />
			))}
		</div>
	);
};

export default function Portfolio() {
	const [activeSection, setActiveSection] = useState('home');
	const { scrollYProgress } = useScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'about', 'projects', 'contact'];
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (currentSection) {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='min-h-screen text-white overflow-hidden'>
			<UniverseBackground />

			<header className='fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm'>
				<nav className='container mx-auto px-6 py-4'>
					<ul className='flex justify-center space-x-8'>
						{['Home', 'About', 'Projects', 'Contact'].map((item) => (
							<li key={item}>
								<Button
									variant='ghost'
									className={`text-sm font-medium transition-colors hover:text-blue-400 ${
										activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
									}`}
									onClick={() =>
										document
											.getElementById(item.toLowerCase())
											?.scrollIntoView({ behavior: 'smooth' })
									}
								>
									{item}
								</Button>
							</li>
						))}
					</ul>
				</nav>
			</header>

			<main className='relative z-10'>
				<section
					id='home'
					className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden'
				>
					<motion.div className='text-center' style={{ opacity, scale }}>
						<motion.h1
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: 'easeOut' }}
							className='text-6xl uppercase font-extrabold mb-6 text-white drop-shadow-2xl'
						>
							Bui Tri Tinh
						</motion.h1>
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='text-lg font-bold mb-4 uppercase'
						>
							Call me by Carson
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className='text-2xl text-gray-300 mb-8'
						>
							💻 Full-Stack Developer
						</motion.p>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className='flex flex-wrap justify-center gap-4 mb-8 max-w-3xl'
						>
							{techSkills.map((skill, index) => (
								<motion.div
									key={skill.name}
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
									className='bg-white bg-opacity-10 rounded-full p-2'
								>
									<Image
										src={skill.image}
										alt={skill.name}
										width={48}
										height={48}
										className='rounded-full'
									/>
								</motion.div>
							))}
						</motion.div>
						<Button
							className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105'
							onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
						>
							Liên hệ ngay
						</Button>
					</motion.div>
					<motion.div
						className='absolute bottom-10 left-[48%] transform -translate-x-1/2'
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					>
						<ChevronDown className='size-14 text-white opacity-50' />
					</motion.div>
				</section>

				<section id='about' className='py-20 bg-black bg-opacity-50'>
					<div className='container mx-auto px-6'>
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='text-3xl font-bold mb-8 text-center'
						>
							About Me
						</motion.h2>
						<div className='flex flex-col md:flex-row items-center justify-center gap-8'>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
							>
								<Avatar className='w-48 h-48'>
									<AvatarImage src='/placeholder.svg?height=180&width=180' alt='John Doe' />
									<AvatarFallback>
										<Image src='/avt.jpg' width={200} height={200} alt='avt' />
									</AvatarFallback>
								</Avatar>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className='max-w-md'
							>
								<p className='text-gray-300 mb-4'>
									I&apos;m Software Engineer with 2 years of experience in Web Development. I have 1.5
									years of React-related technologies. With my knowledge of UI/UX design, i enjoy
									solving front-end problems and creating the best user experience for uses. I also
									spend time learning new technologies and best practices to become a better engineer.
								</p>
								<p className='text-gray-300'>
									When I&apos;m not coding, you can find me exploring new technologies, contributing
									to open-source projects, or sharing my knowledge through tech blogs and community
									meetups.
								</p>
							</motion.div>
						</div>
					</div>
				</section>

				<section id='projects' className='py-20'>
					<div className='container mx-auto px-6'>
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='text-3xl font-bold mb-8 text-center'
						>
							Projects
						</motion.h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{projects.map((project, index) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<Card className='bg-white bg-opacity-5 border border-gray-700 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
										<CardHeader className='p-4'>
											<CardTitle className='text-lg font-bold text-white'>
												{project.title}
											</CardTitle>
										</CardHeader>
										<CardContent className='p-4 flex-grow'>
											<div className='relative w-full h-40'>
												<Image
													src={project.image}
													alt={project.title}
													layout='fill'
													objectFit='cover'
													className='rounded-md'
												/>
											</div>
											<ScrollArea className='mt-4 h-20'>
												<CardDescription className='text-gray-300 text-sm leading-relaxed'>
													{project.description}
												</CardDescription>
											</ScrollArea>
											<div className='flex flex-wrap gap-2 mt-4'>
												{project.tags.map((tag) => (
													<Badge
														key={tag}
														variant='secondary'
														className='bg-blue-500 text-white'
													>
														{tag}
													</Badge>
												))}
											</div>
										</CardContent>
										<CardFooter className='p-4'>
											<Button
												variant='outline'
												className='w-full rounded-full text-white border-gray-500 hover:bg-gray-800 hover:text-white'
											>
												View Project <ExternalLink className='ml-2 h-4 w-4' />
											</Button>
										</CardFooter>
									</Card>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section id='contact' className='py-20 bg-black bg-opacity-50'>
					<div className='container mx-auto px-6'>
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='text-3xl font-bold mb-8 text-center'
						>
							Get in Touch
						</motion.h2>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='max-w-md mx-auto'
						>
							<Card className='bg-white bg-opacity-10 border-none'>
								<CardHeader>
									<CardTitle className='text-white'>Contact Me</CardTitle>
									<CardDescription className='text-gray-300'>
										Feel free to reach out for collaborations or just a friendly hello
									</CardDescription>
								</CardHeader>
								<CardContent>
									<form className='space-y-4'>
										<div>
											<label
												htmlFor='name'
												className='block text-sm font-medium text-gray-300 mb-1'
											>
												Name
											</label>
											<input
												type='text'
												id='name'
												name='name'
												className='w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
												required
											/>
										</div>
										<div>
											<label
												htmlFor='email'
												className='block text-sm font-medium text-gray-300 mb-1'
											>
												Email
											</label>
											<input
												type='email'
												id='email'
												name='email'
												className='w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
												required
											/>
										</div>
										<div>
											<label
												htmlFor='message'
												className='block text-sm font-medium text-gray-300 mb-1'
											>
												Message
											</label>
											<textarea
												id='message'
												name='message'
												rows={4}
												className='w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
												required
											></textarea>
										</div>
										<Button
											type='submit'
											className='w-full bg-blue-500 hover:bg-blue-600 text-white'
										>
											Send Message
										</Button>
									</form>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</section>
			</main>

			<footer className='bg-black bg-opacity-50 py-8'>
				<div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-400 text-sm'>© 2023 John Doe. All rights reserved.</p>
					<div className='flex space-x-4 mt-4  md:mt-0'>
						<Button variant='ghost' size='icon' className='text-white hover:text-blue-400'>
							<Github className='h-5 w-5' />
						</Button>
						<Button variant='ghost' size='icon' className='text-white hover:text-blue-400'>
							<Linkedin className='h-5 w-5' />
						</Button>
						<Button variant='ghost' size='icon' className='text-white hover:text-blue-400'>
							<Mail className='h-5 w-5' />
						</Button>
					</div>
				</div>
			</footer>
		</div>
	);
}
