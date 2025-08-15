import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Author() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="text-center space-y-6 mb-16">
        <Badge variant="outline" className="mb-4">
          Meet the Author
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hello, I'm
          <span className="text-primary"> John Doe</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Full-stack developer passionate about creating exceptional web
          experiences with modern technologies and clean, maintainable code.
        </p>
      </section>

      {/* Profile Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">John Doe</h3>
                  <p className="text-muted-foreground">Full-Stack Developer</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Contact
                  </Button>
                  <Button size="sm">Follow</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I'm a passionate full-stack developer with over 5 years of
                  experience building scalable web applications. I specialize in
                  React, Next.js, and Node.js, with a keen eye for user
                  experience and performance optimization.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and tutorials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">
                          Senior Full-Stack Developer
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          TechCorp Inc.
                        </p>
                      </div>
                      <Badge variant="outline">2022 - Present</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Leading development of scalable web applications using
                      React, Next.js, and AWS.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Frontend Developer</h4>
                        <p className="text-sm text-muted-foreground">
                          StartupXYZ
                        </p>
                      </div>
                      <Badge variant="outline">2020 - 2022</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Built responsive user interfaces and improved application
                      performance by 40%.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Junior Developer</h4>
                        <p className="text-sm text-muted-foreground">
                          DevStudio
                        </p>
                      </div>
                      <Badge variant="outline">2019 - 2020</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Developed and maintained client websites using modern
                      JavaScript frameworks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
            <CardDescription>
              The tools and technologies I work with
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Vue.js</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>GraphQL</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">DevOps & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>AWS</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Git</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Vercel</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section>
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
            <CardDescription>
              I'm always interested in new opportunities and collaborations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">📧 Email Me</Button>
              <Button variant="outline">💼 LinkedIn</Button>
              <Button variant="outline">🐙 GitHub</Button>
              <Button>📱 Schedule a Call</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
