import { useState, useMemo } from 'react';
import { Github, ExternalLink, Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import travel from '../assets/travel.png';
import gif from '../assets/gif.png';
import foodbox from '../assets/foodbox.png';
import z from '../assets/z.png';
import sureshipImg from '../assets/sureship.png';
import staticImg from '../assets/static.png';
import viz from '../assets/viz.png';
import port from '../assets/port.png';
import app from '../assets/app.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mern', name: 'MERN Stack' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Sureship',
      description: 'A full-stack courier and tracking system like Delhivery, with live tracking, order booking, and delivery updates.',
      image: sureshipImg,
      category: 'fullstack',
      tags: ['Node.js', 'Express', 'MongoDB', 'Redux', 'Prisma', 'Tailwind CSS', 'Next.js'],
      demoLink: 'https://sureship.in/',
      repoLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Simple Shopping Landing Page',
      description: 'A modern and responsive landing page for a shopping website, built with React.js, JavaScript, and Tailwind CSS.',
      image: staticImg,
      category: 'frontend',
      tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
      demoLink: 'https://65119dbdb708032fcd340107--aquamarine-churros-a41eaa.netlify.app/',
      repoLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A customizable portfolio website for developers and designers with smooth animations and responsive design.',
      image: port,
      category: 'frontend',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoLink: 'https://nehaportfolio182.netlify.app/#projects',
      repoLink: 'https://github.com',
    },
    {
      id: 4,
      title: 'VizLabs App',
      description: 'Full-stack weather and analytics app with charts, dashboards, real-time & forecast data.',
      image: viz,
      category: 'fullstack',
      tags: ['React', 'API Integration', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Data Visualization'],
      demoLink: 'https://demo.vizta.in/home/dash',
      repoLink: 'https://github.com/nehaverma875/vizlabs-weather-app',
    },
    {
      id: 6,
      title: 'VizLabs Website',
      description: 'The official VizLabs site built with Next.js, showcasing services and offerings.',
      image: app,
      category: 'fullstack',
      tags: ['Next.js', 'Tailwind CSS', 'CSS', 'Node.js', 'MongoDB'],
      demoLink: 'https://vizta.in/',
      repoLink: 'https://github.com/piyushgupta12345/Music_Project',
    },
    {
      id: 9,
      title: 'Food Order Website',
      description: 'Food ordering site with real-time filtering, dynamic cards, and responsive UI.',
      image: foodbox,
      category: 'frontend',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://655f85e8bd73481469da9ff5--harmonious-pavlova-9ead4f.netlify.app/',
      repoLink: 'https://github.com/your-username/food-order-website',
    },
    {
      id: 10,
      title: 'Travel Blog UI',
      description: 'Clean and responsive travel blog UI with professional styling.',
      image: travel,
      category: 'frontend',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://6592ffc96ca12de6f396bb2e--lovely-salamander-2f605e.netlify.app/',
      repoLink: 'https://github.com/nehaverma875/Tour-website',
    },
    {
      id: 11,
      title: 'Random GIF Generator',
      description: 'Generate random GIFs using third-party API and keyword search.',
      image: gif,
      category: 'frontend',
      tags: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://65143f3591309a309b257b38--vocal-melba-ffc1ba.netlify.app/',
      repoLink: 'https://github.com/your-username/random-gif-generator',
    },
    {
      id: 12,
      title: 'ZspecialCompany',
      description: 'MERN Stack app with form submission, sound feedback, and MongoDB integration.',
      image: z,
      category: 'mern',
      tags: ['MongoDB', 'Express', 'ReactJS', 'Node.js', 'API'],
      demoLink: 'https://myfullstack-poject-hc7t.vercel.app/',
      repoLink: 'https://github.comyour-username/zspecialcompany',
    },
  ];

  const filteredProjects = useMemo(() => {
    return filter === 'all' ? projects : projects.filter(project => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-5xl sm:text-6xl font-extrabold mb-12 text-black dark:text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Star className="inline-block text-primary mr-2" /> My Project Showcase
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                filter === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black hover:bg-gray-100 border-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group rounded-2xl border border-gray-200 bg-white dark:bg-white/5 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black text-white hover:bg-gray-800"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black text-white hover:bg-gray-800"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-black dark:text-white">{project.title}</h3>
                  <div className="p-1.5 rounded-full bg-black/10 text-black dark:bg-primary/10 dark:text-primary">
                    <Code size={16} />
                  </div>
                </div>
                <p className="text-gray-700 dark:text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full dark:bg-secondary dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
