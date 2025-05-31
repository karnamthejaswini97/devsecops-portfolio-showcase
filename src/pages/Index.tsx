
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronUp, ExternalLink, Download, Mail, Phone, MapPin, Calendar, Building, Award, Code, User, MessageCircle, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'CI/CD', category: 'DevOps' },
    { name: 'DevSecOps', category: 'Security' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Jenkins', category: 'DevOps' },
    { name: 'Python', category: 'Programming' },
    { name: 'Bash', category: 'Programming' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Docker', category: 'Containerization' }
  ];

  const experiences = [
    {
      company: 'Medical Mutual',
      role: 'Senior Cloud DevSecOps Engineer',
      duration: '11/2023 – Present',
      location: 'Columbus, Ohio',
      description: [
        'Lead DevSecOps transformation initiatives across multi-cloud environments (AWS & Azure)',
        'Architect and implement zero-trust security frameworks within CI/CD pipelines',
        'Design automated security compliance workflows using Infrastructure as Code (Terraform)',
        'Integrate advanced security scanning tools (SAST, DAST, SCA) into development lifecycle',
        'Mentor development teams on secure coding practices and shift-left security principles',
        'Orchestrate container security strategies using Kubernetes and Docker with security scanning',
        'Develop security-first automation scripts using Python and Bash for incident response'
      ]
    },
    {
      company: 'Strategic Systems Inc',
      role: 'AWS Cloud DevSecOps Engineer',
      duration: '04/2022 – 10/2023',
      location: 'Columbus, Ohio',
      description: [
        'Built secure CI/CD pipelines for .NET and Java applications using Azure DevOps & Jenkins',
        'Implemented Veracode scans (SAST, DAST, SCA) into release cycles',
        'Migrated applications from on-premises to AWS with CloudFormation & DMS',
        'Developed Grafana dashboards using CloudWatch metrics'
      ]
    },
    {
      company: 'EY Singapore',
      role: 'Senior DevOps Engineer',
      duration: '2021 – 2022',
      location: 'Singapore',
      description: [
        'Led infrastructure automation initiatives for enterprise clients',
        'Implemented security-first DevOps practices across multiple projects',
        'Mentored junior engineers on cloud architecture best practices'
      ]
    },
    {
      company: 'Edotco Malaysia',
      role: 'Cloud Engineer',
      duration: '2020 – 2021',
      location: 'Kuala Lumpur, Malaysia',
      description: [
        'Designed and implemented cloud infrastructure solutions',
        'Automated deployment processes reducing deployment time by 60%',
        'Collaborated with cross-functional teams on digital transformation initiatives'
      ]
    }
  ];

  const projects = [
    {
      title: 'Secure Migration to AWS',
      description: 'Designed automated AWS migration strategy using Infrastructure as Code and security best practices',
      tags: ['AWS', 'CloudFormation', 'DevSecOps', 'Migration'],
      impact: 'Reduced infrastructure provisioning time by 75%'
    },
    {
      title: 'CI/CD Pipeline Optimization',
      description: 'Implemented comprehensive CI/CD pipelines with integrated security scanning',
      tags: ['Jenkins', 'Veracode', 'Azure DevOps', 'Security'],
      impact: 'Improved deployment frequency by 300%'
    },
    {
      title: 'Infrastructure as Code Framework',
      description: 'Built reusable Terraform modules for standardized cloud deployments',
      tags: ['Terraform', 'AWS', 'IaC', 'Automation'],
      impact: 'Standardized infrastructure across 50+ projects'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length < 30) {
      toast({
        title: "Message too short",
        description: "Please provide at least 30 characters in your message.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thejaswini Karnam
            </motion.h1>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/0565f0f1-8f85-4a52-a844-fde73aa5377c.png" 
                alt="Thejaswini Karnam"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Thejaswini Karnam
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Cloud DevSecOps Engineer | AWS & Azure Certified
            </p>
            
            <div className="flex items-center justify-center text-gray-500 mb-8">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Columbus, Ohio</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Linkedin className="w-4 h-4 mr-2" />
                View LinkedIn
              </Button>
              <Button size="lg" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a certified Cloud DevSecOps Engineer with over 5 years of experience delivering secure, automated CI/CD pipelines across AWS and Azure environments. I specialize in enabling DevSecOps culture, infrastructure as code, and continuous delivery excellence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My work spans regulated industries where security and speed must co-exist. I thrive in cross-functional teams and help organizations shift left by implementing secure pipelines using tools like Veracode, Jenkins, Terraform, and Docker.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">5+ Years</h3>
                    <p className="text-gray-600">Experience</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multiple</h3>
                    <p className="text-gray-600">Cloud Certifications</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enterprise</h3>
                    <p className="text-gray-600">Scale Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Certifications</h2>
            <p className="text-lg text-gray-600">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Cloud Providers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>AWS (EC2, ECS, EKS, Lambda, RDS)</li>
                <li>Microsoft Azure</li>
                <li>AWS GuardDuty & WAF</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">DevOps Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Jenkins, Azure DevOps</li>
                <li>XL Deploy, XL Release</li>
                <li>GitHub, Bitbucket, Nexus</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Security</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Veracode (SAST, DAST, SCA)</li>
                <li>AWS Security Services</li>
                <li>DevSecOps Implementation</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Infrastructure as Code</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Terraform</li>
                <li>AWS CloudFormation</li>
                <li>Configuration Management</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Bash, Python</li>
                <li>YAML, JSON</li>
                <li>PowerShell</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Certifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>AWS Certified</li>
                <li>Microsoft Azure Certified</li>
                <li>Terraform Associate</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-gray-600">My journey in Cloud DevSecOps</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      <div className="flex items-center text-gray-500 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{exp.duration}</span>
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Some of my notable work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-sm text-green-600 font-medium">
                      Impact: {project.impact}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          </motion.div>

          <Card className="p-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  B.Tech in Electronics & Communication Engineering
                </h3>
                <p className="text-lg text-blue-600">GITAM University</p>
                <p className="text-gray-600">Bengaluru, India • 2018</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Let's discuss opportunities and collaborations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">karnamthejaswini97@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">614-600-9098</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Columbus, Ohio</span>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your message (minimum 30 characters)"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.message.length}/30 characters minimum
                </p>
              </div>
              
              <Button type="submit" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Thejaswini Karnam</h3>
          <p className="text-gray-400 mb-6">Cloud DevSecOps Engineer</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          
          <Separator className="mb-6 bg-gray-700" />
          
          <p className="text-gray-400 text-sm">
            © 2024 Thejaswini Karnam. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
