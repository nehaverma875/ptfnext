import { User, Star, Calendar, BookOpen, BadgeCheck, MessageCircleHeart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-secondary/5 -z-10"></div>
      <div className="section-container">
        <h1 className="section-title ">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Profile Introduction */}
            <div className="flex items-center gap-6">
              {/* You can replace this with your image */}
              <div className="w-24 h-24 rounded-full bg-primary/20 animate-pulse flex items-center justify-center text-primary font-bold text-xl">
                👩‍💻
              </div>
              <div>
                <h3 className="text-2xl font-semibold gradient-text">Hi, I'm Neha Verma</h3>
                <p className="text-sm text-foreground/70">MERN Stack Developer • React Specialist</p>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I’m a highly motivated <strong>MERN Stack Developer</strong> with a strong focus on building reliable, fast, and scalable web apps. My tech stack includes React.js, Node.js, MongoDB, Express.js, and Tailwind CSS.
              </p>
              <p>
                Whether it’s building from scratch or optimizing existing systems, I bring a passion for clean code, intuitive UX, and project success. I believe in collaboration, timely delivery, and exceeding expectations.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-5 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary"><User size={20} /></div>
                <div>
                  <h4 className="font-semibold mb-1">Client-Centered</h4>
                  <p className="text-sm text-foreground/70">Understanding goals and translating them into powerful digital experiences.</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary"><Star size={20} /></div>
                <div>
                  <h4 className="font-semibold mb-1">Quality & Performance</h4>
                  <p className="text-sm text-foreground/70">I write optimized, maintainable code that loads fast and performs reliably.</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary"><Calendar size={20} /></div>
                <div>
                  <h4 className="font-semibold mb-1">2+ Years of Experience</h4>
                  <p className="text-sm text-foreground/70">Hands-on projects in startups, product teams, and independent builds.</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary"><BookOpen size={20} /></div>
                <div>
                  <h4 className="font-semibold mb-1">Always Improving</h4>
                  <p className="text-sm text-foreground/70">Keeping up with the latest tools, trends, and frameworks in the dev world.</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            {/* <div>
              <h4 className="text-xl font-semibold mt-8 mb-4 gradient-text flex items-center gap-2">
                <BadgeCheck size={18} /> Certifications
              </h4>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 text-sm">
                <li>Full Stack Web Development – Coursera (Meta)</li>
                <li>React.js Advanced Training – Udemy</li>
                <li>JavaScript Data Structures – freeCodeCamp</li>
              </ul>
            </div> */}

            {/* Call to Action */}
            <div className="mt-10 p-6 glass-card border border-primary/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MessageCircleHeart size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Let’s Work Together</h4>
                  <p className="text-sm text-foreground/70">
                    Looking for a reliable developer to bring your vision to life? <br />
                    <a href="#contact" className="text-primary font-medium underline">Contact me today →</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Beyond the Code</h3>
            <div className="glass-card p-6 space-y-6">
              {/* Hobbies */}
              <div>
                <h4 className="font-medium mb-2 text-lg">What I Love:</h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Reading tech blogs</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Open-source contributions</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Exploring UI/UX trends</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Nature walks & chess</li>
                </ul>
              </div>

              {/* Updated Education */}
              <div>
                <h4 className="font-medium mb-2 text-lg">Education:</h4>
                <div className="pl-4 border-l-2 border-primary/30 space-y-3">
                  <div>
                    <p className="font-medium">MCA | Indira Gandhi National Open University</p>
                    <p className="text-foreground/70 text-sm">Delhi, Dec 2021 – Oct 2023</p>
                  </div>
                  <div>
                    <p className="font-medium">BCA | Indira Gandhi National Open University</p>
                    <p className="text-foreground/70 text-sm">Delhi, 2018 – 2021</p>
                  </div>
                  <div>
                    <p className="font-medium">Intermediate | Govt Girls Sr Sec School No-3</p>
                    <p className="text-foreground/70 text-sm">Bhola Nath Nagar, Shahdara – Delhi, 2016 – 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
