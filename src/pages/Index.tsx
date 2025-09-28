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
import { title } from "process";

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
      description: "A web application powered by Wix, with the front-end I designed to help students manage or track their university entrance exam studies and subject management.",
      tech: ["React", "TailwildCSS", "WixSDK", "Javascript","TypeScript","Astro","Node.js"],
      liveUrl: "https://my-site-mt3ut87v-wattanakraimetpann.wix-vibe.com",
      githubUrl: "https://github.com/Qnazter/SineNix"
    },
    {
      title: "TikTokDownloader",
      description: "A tool that lets users download TikTok videos for offline viewing, with an option to obtain a clean copy when the uploader has given permission.",
      tech: ["Node.js", "Ngrok", "LineSDK", "API","Render","Github"],
      liveUrl: "https://lin.ee/Z4hFhGP",
      githubUrl: "https://github.com/Qnazter/TikTokDownloader"
    },
    {
      title: "Unity Game",
      description: "In the RSU Rookie Game Dev project, I created a 2D Unity game where players run, jump, and dodge obstacles, while learning game physics, C#, and problem-solving.",
      tech: ["Unity", "C#", "Chart.js", "Redis"],
      liveUrl: "https://youtu.be/zN1b8Sil0pI",
      githubUrl: "./NotAvailable.html"
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
                <img 
                  src="/logo.jpg" 
                  alt="Logo" 
                  className="w-24 h-24 object-cover rounded-full"
                />
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
              A regular 17-year-old with dreams of becoming a software developer and making this world a better place through technology.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button
              className="gradient-primary hover:glow-effect smooth-transition transform hover:scale-105 animate-float"
              size="lg"
              onClick={() => {
                const section = document.getElementById("section-contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
              <Zap className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 transform hover:scale-105 smooth-transition"
              onClick={() => scrollToSection('section-projects')}
            >
              <Github className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>
          
          <button 
            onClick={() => scrollToSection('section-about')}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-accent smooth-transition"
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
                  I am passionate about software and technology. I am currently studying while gaining real-world experience  
                  through the projects I create, hoping that anyone who come across them will take away something, even if just a little, from my work.
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
                      <p className="font-semibold">Futsal Player Being Captain</p>
                      <p className="text-muted-foreground">2024 December</p>
                      <p className="text-sm text-muted-foreground">Nationwide tournament: Satit Samakkee</p>
                      <p className="text-sm">winning 2nd runner-up among 11 teams</p>
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
                  Extracurricular activities, leadership roles, Sport and community involvement
                </p>
              </div>
            </ParallaxSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float">
                  <CardHeader>
                    <Briefcase className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Extracurricular activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Colorguard Sports Day</p>
                        <p className="text-muted-foreground text-sm">2025 - January</p>
                        <p className="text-sm">I joined my school’s color guard performing for sports day, developing teamwork, perseverance, self-practice, and responsibility.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
              
              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float" style={{ animationDelay: '1s' }}>
                  <CardHeader>
                    <Award className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Leadership roles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">The 53rd student council</p>
                        <p className="text-muted-foreground text-sm">2024 - 2025</p>
                        <p className="text-sm">As a member of the 53rd student council, I developed communication, responsibility, and leadership through hands-on work in the lighting and sound team, managing events like sports day and cheer performances, while gaining technical skills in audio, UniversalControl, and problem-solving.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard intensity={0.5}>
                <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition h-full animate-float" style={{ animationDelay: '2s' }}>
                  <CardHeader>
                    <User className="w-8 h-8 text-primary mb-2 animate-scale-pulse" />
                    <CardTitle>Sport</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Futsal Player</p>
                        <p className="text-muted-foreground text-sm">2022 - Present</p>
                        <p className="text-sm">I captained our girls’ futsal team at the Jao-Ram-Games, winning 2nd runner-up among 11 teams, which taught me responsibility, perseverance, quick decision-making under pressure, and true leadership built on trust.</p>
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
                        <p className="font-semibold">Hospital Internship</p>
                        <p className="text-muted-foreground text-sm">2024 - April</p>
                        <p className="text-sm">During my internship at Nakornping Hospital, I assisted with documentation and public service, developing attention to detail, teamwork, and a sense of public responsibility applicable to any career.</p>
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
                  <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition group h-full animate-slide-in-left relative z-30 isolate" style={{ animationDelay: `${index * 0.1}s` }}>
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
                  <Card className="gradient-card border-border/50 card-glow hover:glow-effect smooth-transition group h-full animate-slide-in-left relative z-30 isolate" style={{ animationDelay: `${index * 0.1}s` }}>
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
                        
                        <div className="flex gap-2 relative z-50 pointer-events-auto">
                          <Button 
                            asChild
                            size="sm" 
                            className="gradient-primary hover:glow-effect smooth-transition transform hover:scale-105 cursor-pointer z-30 relative"
                          >
                            <a
                               className="pointer-events-auto"
                               href={project.liveUrl}
                               target="_blank"
                               rel="noopener noreferrer"
                               onClick={(e) => e.stopPropagation()}
                               aria-label={`Open live demo: ${project.title}`}
                             >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                          <Button 
                            asChild
                            size="sm" 
                            variant="outline" 
                            className="border-primary text-primary transform hover:scale-105 smooth-transition cursor-pointer z-30 relative"
                          >
                            <a
className="pointer-events-auto"
                               href={project.githubUrl}
                               target="_blank"
                               rel="noopener noreferrer"
                               onClick={(e) => e.stopPropagation()}
                               aria-label={`Open source code: ${project.title}`}
                             >
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
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
                Thanks
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
