"use client";

import { SITE_DATA } from "@/data";
import { motion } from "framer-motion";
import { Mail, ExternalLink, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient pb-2">
            {SITE_DATA.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
            {SITE_DATA.title}
          </h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            {SITE_DATA.bio}
          </p>
          
          <div className="flex gap-6 justify-center">
            <a href={SITE_DATA.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href={SITE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${SITE_DATA.email}`} className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto" id="projects">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.projects.map((project, index) => (
            <motion.div 
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col h-full hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center justify-between">
                {project.name}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </h3>
              {project.award && (
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full mb-4 self-start">
                  🏆 {project.award}
                </span>
              )}
              <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-blue-300 bg-blue-500/10 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-24 px-6 max-w-4xl mx-auto" id="experience">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Experience & Education</h2>
        
        <div className="space-y-12">
          {/* Education */}
          <div className="relative pl-8 border-l-2 border-slate-700/50">
            <h3 className="text-2xl font-semibold mb-8 -ml-12 flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              Education
            </h3>
            {SITE_DATA.education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10 last:mb-0 relative"
              >
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-900" />
                <h4 className="text-lg font-medium text-white">{item.degree}</h4>
                <div className="text-blue-400 mb-2">{item.institution}</div>
                <div className="text-sm text-slate-400 flex justify-between">
                  <span>{item.date}</span>
                  <span>{item.details}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience */}
          <div className="relative pl-8 border-l-2 border-slate-700/50 mt-16">
            <h3 className="text-2xl font-semibold mb-8 -ml-12 flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-purple-500" />
              Work & Leadership
            </h3>
            {SITE_DATA.experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10 last:mb-0 relative"
              >
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-900" />
                <h4 className="text-lg font-medium text-white">{item.role}</h4>
                <div className="text-purple-400 mb-2">{item.company}</div>
                <div className="text-sm text-slate-500 mb-4">{item.date} {item.location && `| ${item.location}`}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 max-w-6xl mx-auto" id="skills">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl text-center"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillGroup.items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12 mt-20" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <a 
            href={`mailto:${SITE_DATA.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          <div className="mt-12 text-slate-500 text-sm">
            <p>Designed & Built by {SITE_DATA.name}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
