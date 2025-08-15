import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="text-center space-y-6 mb-16">
        <Badge variant="outline" className="mb-4">
          About Us
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Building the Future of
          <span className="text-primary"> Web Development</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We are passionate about creating exceptional digital experiences using
          cutting-edge technologies and modern development practices.
        </p>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded with a vision to democratize modern web development, we
              believe that powerful tools should be accessible to everyone. Our
              journey began with a simple goal: to create beautiful, performant,
              and accessible web applications.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to push the boundaries of what's possible on
              the web, leveraging technologies like Next.js, React, and modern
              CSS frameworks to deliver exceptional user experiences.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                Empowering developers to build amazing web experiences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Innovation</span>
                  <span>95%</span>
                </div>
                <Progress value={95} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Quality</span>
                  <span>98%</span>
                </div>
                <Progress value={98} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>User Experience</span>
                  <span>92%</span>
                </div>
                <Progress value={92} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Focus</h3>
              <p className="text-sm text-muted-foreground">
                We focus on what matters most - delivering value to our users
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Constantly exploring new technologies and methodologies
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Working together to achieve extraordinary results
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-semibold mb-2">Creativity</h3>
              <p className="text-sm text-muted-foreground">
                Thinking outside the box to solve complex problems
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>By the Numbers</CardTitle>
            <CardDescription>
              Some key metrics that define our journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
