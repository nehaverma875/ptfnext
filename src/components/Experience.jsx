import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'MERN Stack Web Developer',
      company: 'VizLabs',
      period: 'Jan 2024 - Present',
      description:
        'Built scalable full-stack solutions with a strong focus on data visualization, backend API integration, and real-time automation.',
      link: 'https://vizta.in',
      technologies: [
        'ReCharts', 'Redux Toolkit Query', 'CSV Data Handling', 'REST APIs', 'React Router', 'Protected Routing',
        'Superset Charts (Tree, Funnel, Heatmap, Word Cloud, Sankey)', 'Data Transformation Pipelines', 'Prisma ORM',
        'Salesforce CRM (Custom Objects, Record Types)', 'Node.js (CRUD APIs)', 'BeautifulSoup', 'Selenium', 'Scrapy',
      ],
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'SureShip — Logistics Platform',
      period: 'May 2024 - Present',
      description:
        'Developed a logistics dashboard with live tracking and vendor management. Integrated secure APIs for seamless shipment operations.',
      link: 'https://sureship.in',
      technologies: [
        'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'Vendor Management', 'Live Tracking',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-6 md:ml-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`mb-12 ${index === experiences.length - 1 ? '' : 'pb-8'}`}
              >
                <div className="absolute -left-4 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <Briefcase size={16} className="text-primary" />
                </div>

                <div className="glass-card p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="flex items-center text-sm text-foreground/70 mt-2 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium underline underline-offset-2 mb-2 inline-block"
                  >
                    {exp.company}
                  </a>

                  <p className="text-foreground/70 mb-5">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
