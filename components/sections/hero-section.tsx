import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Badge variant="secondary" className="text-sm px-4 py-1">
          👋 Welcome to my portfolio
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Your Name
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Full Stack Developer & UI/UX Designer crafting beautiful, functional web experiences
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            View My Work
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center pt-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:your.email@example.com" aria-label="Send Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
