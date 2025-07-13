// import { Award, ExternalLink } from 'lucide-react';

// const Certifications = () => {
//   const certifications = [
//     // {
//     //   id: 1,
//     //   title: 'Full Stack Web Development',
//     //   issuer: 'PW Skills',
//     //   date: 'December 2022',
//     //   credential: 'https://example.com/credential',
//     //   logo: '/placeholder.svg',
//     //   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
//     // },
//     // {
//     //   id: 2,
//     //   title: 'React - The Complete Guide',
//     //   issuer: 'Udemy',
//     //   date: 'August 2022',
//     //   credential: 'https://example.com/credential',
//     //   logo: '/placeholder.svg',
//     //   skills: ['React', 'Redux', 'React Hooks', 'Context API'],
//     // },
//     // {
//     //   id: 3,
//     //   title: 'JavaScript Algorithms and Data Structures',
//     //   issuer: 'freeCodeCamp',
//     //   date: 'May 2022',
//     //   credential: 'https://example.com/credential',
//     //   logo: '/placeholder.svg',
//     //   skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
//     // },
//     // {
//     //   id: 4,
//     //   title: 'MongoDB Basics',
//     //   issuer: 'MongoDB University',
//     //   date: 'March 2022',
//     //   credential: 'https://example.com/credential',
//     //   logo: '/placeholder.svg',
//     //   skills: ['MongoDB', 'NoSQL', 'Database Design'],
//     // },
//   ];

//   return (
//     <section id="certifications" className="py-16 relative bg-secondary/20">
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-secondary/10 -z-10"></div>
//       <div className="section-container">
//         <h2 className="section-title text-center text-3xl font-bold mb-4">Certifications</h2>
//         {/* <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
//           Verified credentials earned through top-tier platforms. Each certification reflects practical knowledge and project-driven learning.
//         </p> */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certifications.map((cert) => (
//             <div
//               key={cert.id}
//               className="rounded-2xl border border-primary/10 bg-background/50 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="p-2 rounded-lg bg-primary/10 text-primary">
//                   <Award size={22} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">{cert.title}</h3>
//                   <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2 mb-5">
//                 {cert.skills.slice(0, 4).map((skill, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//                 {cert.skills.length > 4 && (
//                   <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
//                     +{cert.skills.length - 4} more
//                   </span>
//                 )}
//               </div>

//               <a
//                 href={cert.credential}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
//               >
//                 View Credential
//                 <ExternalLink size={14} className="ml-1" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
