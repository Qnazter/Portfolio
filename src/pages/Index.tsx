import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Background3D from "@/components/Background3D";
import FloatingCard from "@/components/FloatingCard";
import ParallaxSection from "@/components/ParallaxSection";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Globe,
  User,
  BookOpen,
  Briefcase,
  Award,
  ChevronDown,
  Zap,
  Sparkles,
  InstagramIcon
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: "Frontend", items: ["Figma", "HTML", "CSS", "Tailwind CSS", "Javacript"] },
    { category: "Backend", items: ["Node.js", "Python", "MongoDB","API","C#"] },
    { category: "Tools & Others", items: ["GitHub", "Canva", "CapCut", "Render", "Ngrok", "Unity"] }
  ];

  const projects = [
    {
      title: "SineNix",
      description: "Full-stack web application with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "TailwildCSS", "HTML", "Javascript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "TikTokDownloader",
      description: "Real-time collaborative task management application with drag-and-drop functionality and team collaboration features.",
      tech: ["Node.js", "Ngrok", "LineSDK", "API"],
      liveUrl: "https://github.com/Qnazter/TikTokDownloader",
      githubUrl: "https://github.com/Qnazter/TikTokDownloader"
    },
    {
      title: "Unity Game",
      description: "Data visualization dashboard for API metrics with real-time monitoring, performance tracking, and automated reporting.",
      tech: ["Unity", "C#", "Chart.js", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen gradient-background relative overflow-hidden">
      <Background3D />
      
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div 
          className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div 
          className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 15}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -10}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-5 h-5 border border-primary/30 rounded-full animate-rotate-slow"
          style={{
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>
      {/* Hero Section */}
      <section ref={heroRef} id="section-hero" className="min-h-screen flex items-center justify-center px-6 relative z-20">
        <ParallaxSection speed={0.3}>
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-card glow-effect flex items-center justify-center animate-scale-pulse relative">
                <User className="w-16 h-16 text-primary" />
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
              Pannarat Wattanakraimet
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Student 
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curious learner passionate about exploring computer science and building meaningful projects Aspiring to create technology that empowers education and improves everyday life
            </p>
          </div>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button className="gradient-primary hover:glow-effect smooth-transition transform hover:scale-105 animate-float" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
              <Zap className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transform hover:scale-105 smooth-transition">
              <Github className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>
          
          <button 
            onClick={() => scrollToSection('section-about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-accent smooth-transition"
          >
            <ChevronDown className="w-8 h-8 text-primary glow-effect" />
          </button>
          </div>
        </ParallaxSection>
      </section>

      {/* About Section */}
      <section id="section-about" className="py-20 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className={`animate-fade-in ${isVisible['section-about'] ? 'opacity-100' : 'opacity-0'}`}>
            <ParallaxSection speed={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gradient animate-slide-in-left">About Me</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  I'm a dedicated IT student with a passion for software development and technology innovation. 
                  Currently pursuing my degree while building practical experience through personal projects and internships.
                </p>
              </div>
            </ParallaxSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float">
                  <CardHeader>
                    <BookOpen className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold">Sci-Math</p>
                      <p className="text-muted-foreground">SATIT DEMONSTRATION SCHOOL</p>
                      <p className="text-sm text-muted-foreground">Expected: 2026</p>
                      <p className="text-sm text-primary">GPAX: 3.3</p>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
              
              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float" style={{ animationDelay: '1s' }}>
                  <CardHeader>
                    <Briefcase className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold">Captain of Women's Futsal Team</p>
                      <p className="font-semibold">Developer</p>
                      <p className="font-semibold">Colorguard</p>
                      <p className="font-semibold">SPA 53 - Light&Sound</p>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
              
              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float" style={{ animationDelay: '2s' }}>
                  <CardHeader>
                    <Award className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold">Dean's List</p>
                      <p className="text-muted-foreground">Fall 2023, Spring 2024</p>
                      <p className="text-sm text-muted-foreground">Top 10% of class</p>
                      <p className="text-sm">Programming Competition Winner</p>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="section-activities" className="py-20 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className={`animate-fade-in ${isVisible['section-activities'] ? 'opacity-100' : 'opacity-0'}`}>
            <ParallaxSection speed={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gradient animate-slide-in-left">Activities & Involvement</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Extracurricular activities, leadership roles, and community involvement
                </p>
              </div>
            </ParallaxSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float">
                  <CardHeader>
                    <Briefcase className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Student Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Computer Science Club - President</p>
                        <p className="text-muted-foreground text-sm">2023 - Present</p>
                        <p className="text-sm">Organizing hackathons and coding workshops</p>
                      </div>
                      <div>
                        <p className="font-semibold">Tech Mentorship Program</p>
                        <p className="text-muted-foreground text-sm">2024 - Present</p>
                        <p className="text-sm">Mentoring freshman CS students</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
              
              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float" style={{ animationDelay: '1s' }}>
                  <CardHeader>
                    <Award className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Competitions & Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Regional Hackathon Winner</p>
                        <p className="text-muted-foreground text-sm">Spring 2024</p>
                        <p className="text-sm">1st place in AI/ML category</p>
                      </div>
                      <div>
                        <p className="font-semibold">Programming Contest Participant</p>
                        <p className="text-muted-foreground text-sm">2023 - 2024</p>
                        <p className="text-sm">Multiple top-10 finishes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float" style={{ animationDelay: '2s' }}>
                  <CardHeader>
                    <User className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Leadership Roles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Student Council Representative</p>
                        <p className="text-muted-foreground text-sm">2023 - 2024</p>
                        <p className="text-sm">Advocating for student tech initiatives</p>
                      </div>
                      <div>
                        <p className="font-semibold">Coding Bootcamp Instructor</p>
                        <p className="text-muted-foreground text-sm">Summer 2024</p>
                        <p className="text-sm">Teaching web development basics</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float" style={{ animationDelay: '3s' }}>
                  <CardHeader>
                    <Globe className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Community Involvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Code for Community Volunteer</p>
                        <p className="text-muted-foreground text-sm">2023 - Present</p>
                        <p className="text-sm">Building websites for local nonprofits</p>
                      </div>
                      <div>
                        <p className="font-semibold">STEM Outreach Program</p>
                        <p className="text-muted-foreground text-sm">2024</p>
                        <p className="text-sm">Teaching coding to high school students</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="section-skills" className="py-20 px-6 bg-secondary/20 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className={`animate-slide-in-left ${isVisible['section-skills'] ? 'opacity-100' : 'opacity-0'}`}>
            <ParallaxSection speed={0.1}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
                <p className="text-xl text-muted-foreground">
                  Technologies and tools I work with
                </p>
              </div>
            </ParallaxSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <FloatingCard key={index} intensity={0.3}>
                  <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {index === 0 && <Code className="w-6 h-6 text-primary animate-scale-pulse" />}
                        {index === 1 && <Database className="w-6 h-6 text-primary animate-scale-pulse" />}
                        {index === 2 && <Server className="w-6 h-6 text-primary animate-scale-pulse" />}
                        <CardTitle>{skillGroup.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20 transform hover:scale-105 smooth-transition"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="section-projects" className="py-20 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className={`animate-fade-in ${isVisible['section-projects'] ? 'opacity-100' : 'opacity-0'}`}>
            <ParallaxSection speed={0.15}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gradient">The Projects</h2>
                <p className="text-xl text-muted-foreground">
                  Some of my recent work and personal projects
                </p>
              </div>
            </ParallaxSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <FloatingCard key={index} intensity={0.4}>
                  <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition group h-full animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary animate-rotate-slow" />
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline" 
                              className="border-primary/30 text-primary hover:bg-primary/10 transform hover:scale-105 smooth-transition"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="gradient-primary hover:glow-effect smooth-transition transform hover:scale-105">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                          </Button>
                          <Button size="sm" variant="outline" className="border-primary text-primary transform hover:scale-105 smooth-transition">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="section-contact" className="py-20 px-6 bg-secondary/10 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`animate-fade-in ${isVisible['section-contact'] ? 'opacity-100' : 'opacity-0'}`}>
            <ParallaxSection speed={0.05}>
              <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
              <p className="text-xl text-muted-foreground mb-12">
                I'm always interested in new opportunities and collaborations
              </p>
            </ParallaxSection>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:wattanakraimetpannarat.smith@email.com" className="group">
                <div className="w-16 h-16 rounded-full gradient-card glow-effect flex items-center justify-center group-hover:animate-glow-pulse smooth-transition transform group-hover:scale-110 animate-float">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Email</p>
              </a>
              
              <a href="https://github.com/Qnazter" className="group">
                <div className="w-16 h-16 rounded-full gradient-card glow-effect flex items-center justify-center group-hover:animate-glow-pulse smooth-transition transform group-hover:scale-110 animate-float" style={{ animationDelay: '1s' }}>
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">GitHub</p>
              </a>
              
              <a href="https://www.instagram.com/panwptr" className="group">
                <div className="w-16 h-16 rounded-full gradient-card glow-effect flex items-center justify-center group-hover:animate-glow-pulse smooth-transition transform group-hover:scale-110 animate-float" style={{ animationDelay: '2s' }}>
                  <InstagramIcon className="w-8 h-8 text-primary" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Instagram</p>
              </a>
            </div>
            
            <Button size="lg" className="gradient-primary hover:glow-effect smooth-transition transform hover:scale-105 animate-scale-pulse">
              <Mail className="w-4 h-4 mr-2" />
              <a href="https://www.instagram.com/panwptr">Send me a message</a>
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Pannarat Wattanakraimet. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;