import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Rocket, Brain, Star } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tools', name: 'Tools & DevOps' },
  ];

  const skills = [
    // Frontend
    { id: 1, name: 'HTML5', category: 'frontend', level: 90 },
    { id: 2, name: 'CSS3', category: 'frontend', level: 85 },
    { id: 3, name: 'JavaScript', category: 'frontend', level: 85 },
    { id: 4, name: 'React.js', category: 'frontend', level: 80 },
    { id: 5, name: 'Tailwind CSS', category: 'frontend', level: 85 },
    { id: 6, name: 'Redux Toolkit', category: 'frontend', level: 75 },
    { id: 7, name: 'ShadCN UI', category: 'frontend', level: 85 },
    { id: 20, name: 'Bootstrap', category: 'frontend', level: 75 },
    { id: 21, name: 'Flowbite', category: 'frontend', level: 70 },
    { id: 22, name: 'Next.js', category: 'frontend', level: 70 },
    { id: 23, name: 'Advanced RTK Query', category: 'frontend', level: 70 },

    // Backend
    { id: 8, name: 'Node.js', category: 'backend', level: 80 },
    { id: 9, name: 'Express.js', category: 'backend', level: 80 },
    { id: 10, name: 'REST APIs', category: 'backend', level: 85 },
    { id: 11, name: 'JWT & Auth', category: 'backend', level: 75 },

    // Database
    { id: 12, name: 'MongoDB', category: 'database', level: 80 },
    { id: 24, name: 'Firebase', category: 'database', level: 60 },
    { id: 25, name: 'Prisma', category: 'database', level: 50 },

    // Tools
    { id: 14, name: 'Postman', category: 'tools', level: 85 },
    { id: 15, name: 'VS Code', category: 'tools', level: 90 },
    { id: 16, name: 'Git & GitHub', category: 'tools', level: 85 },
    { id: 17, name: 'CI/CD Basics', category: 'tools', level: 60 },
    { id: 18, name: 'Docker (Basics)', category: 'tools', level: 50 },
    { id: 19, name: 'NPM & Packages', category: 'tools', level: 85 },
    { id: 26, name: 'Vercel', category: 'tools', level: 80 },
    { id: 27, name: 'Netlify', category: 'tools', level: 75 },
  ];

  const getLevelTag = (level) => {
    if (level >= 85) return { tag: 'Expert', icon: <Rocket size={14} />, color: 'text-green-500' };
    if (level >= 70) return { tag: 'Intermediate', icon: <Brain size={14} />, color: 'text-yellow-500' };
    return { tag: 'Beginner', icon: <Wrench size={14} />, color: 'text-red-500' };
  };

  const filteredSkills = useMemo(() => {
    return activeCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="section-container">
        <motion.h2
          className="section-title text-center text-4xl font-bold mb-12 text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Star className="inline-block text-primary mr-2" />
          My Tech Skills with Motion ✨
        </motion.h2>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-muted text-black dark:text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {filteredSkills.map((skill) => {
            const { tag, icon, color } = getLevelTag(skill.level);
            return (
              <motion.div
                key={skill.id}
                className="p-6 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-xl border border-border shadow-xl hover:scale-[1.02] transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-black dark:text-white">{skill.name}</h3>
                  <span className={`text-xs font-medium flex items-center gap-1 ${color}`}>
                    {icon} {tag}
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-md"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <p className="mt-2 text-xs text-black dark:text-muted-foreground">
                  {skill.level}% Proficiency
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
