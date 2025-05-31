import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, MapPin } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'DevSecOps', category: 'Security' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'Docker', category: 'Containers' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Python', category: 'Programming' },
    { name: 'Bash', category: 'Scripting' },
    { name: 'Veracode', category: 'Security' },
  ];

  const experiences = [
    {
      company: 'Medical Mutual',
      role: 'Cloud DevSecOps Engineer',
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
        'Implemented Veracode security scans (SAST, DAST, SCA) into release cycles',
        'Migrated applications from on-premises to AWS using CloudFormation & DMS',
        'Developed comprehensive Grafana dashboards using CloudWatch metrics',
        'Automated infrastructure provisioning using Terraform and AWS CloudFormation'
      ]
    },
    {
      company: 'Ernst & Young (EY)',
      role: 'Cloud DevOps Engineer',
      duration: '09/2021 – 03/2022',
      location: 'Singapore',
      description: [
        'Designed and implemented CI/CD pipelines for microservices architecture',
        'Managed containerized applications using Docker and Kubernetes',
        'Automated deployment processes across development, staging, and production environments',
        'Collaborated with cross-functional teams to optimize development workflows'
      ]
    },
    {
      company: 'Edotco Malaysia',
      role: 'DevOps Engineer',
      duration: '06/2020 – 08/2021',
      location: 'Kuala Lumpur, Malaysia',
      description: [
        'Implemented infrastructure automation using Terraform and Ansible',
        'Managed AWS cloud infrastructure and cost optimization initiatives',
        'Developed monitoring and alerting solutions using CloudWatch and Grafana',
        'Streamlined deployment processes reducing deployment time by 60%'
      ]
    }
  ];

  const projects = [
    {
      title: 'Secure AWS Migration',
      description: 'Designed automated AWS migration strategy using Infrastructure as Code and security best practices',
      tags: ['AWS', 'CloudFormation', 'DevSecOps', 'Terraform']
    },
    {
      title: 'CI/CD Security Pipeline',
      description: 'Implemented comprehensive security scanning pipeline with SAST, DAST, and SCA integration',
      tags: ['Jenkins', 'Veracode', 'Security', 'Azure DevOps']
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Architected zero-trust security framework for multi-cloud environments',
      tags: ['Security', 'AWS', 'Azure', 'Kubernetes']
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'GITAM University',
      location: 'Bengaluru, India',
      year: '2018'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-purple-100 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Thejaswini Karnam
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-purple-600 transition-colors capitalize font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img
                src="/lovable-uploads/0565f0f1-8f85-4a52-a844-fde73aa5377c.png"
                alt="Thejaswini Karnam"
                className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Thejaswini Karnam
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Cloud DevSecOps Engineer
            </p>
            <div className="flex items-center justify-center text-gray-600 mb-2">
              <MapPin className="h-5 w-5 mr-2 text-purple-500" />
              <span className="text-lg">Columbus, Ohio</span>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              AWS & Azure Certified | 5+ Years Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              View LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-300 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-pink-300 text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a certified Cloud DevSecOps Engineer with over 5 years of experience delivering secure, 
                automated CI/CD pipelines across AWS and Azure environments. I specialize in enabling DevSecOps 
                culture, infrastructure as code, and continuous delivery excellence.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My work spans regulated industries where security and speed must co-exist. I thrive in 
                cross-functional teams and help organizations shift left by implementing secure pipelines 
                using tools like Veracode, Jenkins, Terraform, and Docker.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Certifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud Providers',
                skills: ['AWS (EC2, ECS, EKS, Lambda, RDS)', 'Microsoft Azure', 'Multi-cloud Architecture'],
                color: 'from-blue-400 to-cyan-400'
              },
              {
                title: 'DevOps Tools',
                skills: ['Jenkins', 'Azure DevOps', 'XL Deploy', 'XL Release', 'GitHub', 'Bitbucket'],
                color: 'from-purple-400 to-pink-400'
              },
              {
                title: 'Security',
                skills: ['Veracode (SAST, DAST, SCA)', 'AWS GuardDuty', 'AWS WAF', 'Zero-Trust Architecture'],
                color: 'from-pink-400 to-rose-400'
              },
              {
                title: 'Infrastructure as Code',
                skills: ['Terraform', 'AWS CloudFormation', 'Ansible', 'Infrastructure Automation'],
                color: 'from-green-400 to-emerald-400'
              },
              {
                title: 'Languages & Scripting',
                skills: ['Python', 'Bash', 'YAML', 'JSON', 'PowerShell'],
                color: 'from-orange-400 to-amber-400'
              },
              {
                title: 'Certifications',
                skills: ['AWS Certified', 'Microsoft Azure Certified', 'Terraform Associate', 'DevSecOps Certified'],
                color: 'from-violet-400 to-purple-400'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-gray-700 flex items-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700 mt-1">
                          {exp.role}
                        </CardDescription>
                        <div className="flex items-center mt-2 text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0">
                        {exp.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mr-3 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/50">
                  <CardHeader>
                    <CardTitle className="text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                      size="sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {education[0].degree}
                </CardTitle>
                <CardDescription className="text-lg">
                  <div className="text-gray-700 font-medium">{education[0].institution}</div>
                  <div className="flex items-center mt-1 text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {education[0].location} • {education[0].year}
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's connect and discuss how we can work together!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-purple-500" />
                    <span className="text-gray-700">karnamthejaswini97@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-purple-500" />
                    <span className="text-gray-700">Columbus, Ohio</span>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Connect with me:</h4>
                    <div className="flex space-x-4">
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-50"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea 
                        required 
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-purple-200">
            © 2024 Thejaswini Karnam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
